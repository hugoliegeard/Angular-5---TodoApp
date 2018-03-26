import {Injectable} from '@angular/core';
import {Task} from '../../models/task';

@Injectable()
export class TaskStorageService {

  constructor() {
  }

  /**
   * Retourne une liste de tâches depuis le localStorage
   * Ou, un nouveau tableau si vide.
   * @returns {any}
   */
  getTasks() {
    // -- Récupération des Tâches depuis le localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks !== null) {
      return tasks;
    } else {
      return [];
    }
  }

  /**
   * Permet de Sauvegarder les tâches
   * dans le localStorage.
   * @param {Task[]} tasks
   */
  save(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

}
