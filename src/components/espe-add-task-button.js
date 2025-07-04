import { LitElement, html, css } from 'lit-element';

class EspeAddTaskButton extends LitElement {
  static get properties() {
    return {
      theme: { type: String },
      _showForm: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.theme = 'dark';
    this._showForm = false;
  }

  static get styles() {
    return css`
      button {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--primary-color, #019863);
        color: white;
        border: none;
        border-radius: 50%;
        width: 56px;
        height: 56px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        line-height: 1;
        z-index: 100;
      }
      button:hover {
        background: var(--primary-hover, #017f56);
      }
      .form-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 200;
      }
      form {
        background: var(--bg-secondary, white);
        padding: 1rem;
        border-radius: 8px;
        min-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      }
      input, textarea, select {
        width: 100%;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 1rem;
        box-sizing: border-box;
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
      }
      button[type="submit"] {
        background: var(--primary-color, #019863);
        color: white;
        border: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        flex-shrink: 0;
        width: auto;
        margin-right: 150px;
      }
      button[type="button"] {
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        flex-shrink: 0;
        width: auto;
        margin-left: 100px;
      }
    `;
  }

  _toggleForm() {
    this._showForm = !this._showForm;
  }

  _submitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newTask = {
      name: formData.get('name') || 'Nueva tarea',
      notes: formData.get('notes') || '',
      time: formData.get('time') || '',
      priority: formData.get('priority') || 'media',
      date: formData.get('date') || 'hoy'
    };

    this.dispatchEvent(new CustomEvent('task-added', {
      detail: newTask,
      bubbles: true,
      composed: true
    }));

    this._showForm = false;
    e.target.reset();
  }

  render() {
    return html`
      <button @click="${this._toggleForm}" title="Agregar tarea">+</button>

      ${this._showForm ? html`
        <div class="form-overlay" @click="${this._toggleForm}">
          <form @submit="${this._submitForm}" @click="${e => e.stopPropagation()}">
            <h3>Agregar Nueva Tarea</h3>
            <input name="name" type="text" placeholder="Nombre de la tarea" required />
            <textarea name="notes" placeholder="Notas"></textarea>
            <input name="time" type="time" />
            <select name="priority">
              <option value="alta">Alta</option>
              <option value="media" selected>Media</option>
              <option value="baja">Baja</option>
            </select>
            <input name="date" type="date" />
            <div class="actions">
              <button type="submit">Agregar</button>
              <button type="button" @click="${this._toggleForm}">Cancelar</button>
            </div>
          </form>
        </div>
      ` : ''}
    `;
  }
}
if (!customElements.get('espe-add-task-button')) {
  customElements.define('espe-add-task-button', EspeAddTaskButton);
}

