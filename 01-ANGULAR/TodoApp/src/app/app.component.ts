import {Component, OnInit} from '@angular/core';
import {TaskStorageService} from './services/storage/task-storage.service';
import {Task} from './models/task';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private taskStorageService: TaskStorageService) {
  }

  tasks: Task[] = [];

  ngOnInit(): void {

    /**
     * Au chargement de l'application,
     * je récupère mes tâches dans le
     * localStorage.
     * @type {any | any[]}
     */
    this.tasks = this.taskStorageService.getTasks();
  }

  /**
   * Cette fonction se déclenche dans
   * l'application lorsqu'une nouvelle
   * tâche est créée par l'utilisateur
   * dans le composant app-addTask.
   * @param newTaskEvent
   */
  newTask(newTaskEvent: any) {
    /**
     * On ajoute la nouvelle tâche dans
     * le tableau de tâches. Puis on
     * sauvegarde dans le localStorage.
     */
    this.tasks.push(newTaskEvent.task);
    this.taskStorageService.save(this.tasks);
  }

  /**
   * L'utilisateur viens de
   * terminer une tâche.
   * @param {Task} task
   */
  taskIsDone(task: Task) {
    task.status = true;
    this.taskStorageService.save(this.tasks);
  }

  /**
   * Permet de compter les tâches non terminée.
   */
  getCountDoneTasks() {
    const doneTasks = _.filter(this.tasks, { 'status': false });
    return doneTasks.length;
  }

  /**
   * L'utilisateur viens de supprimer
   * une tâche. On la retire du tableau
   * et on sauvegarde le tout !
   * @param task
   */
  removeTask(task) {
    _.pullAllWith(this.tasks, [task], _.isEqual);
    this.taskStorageService.save(this.tasks);
  }
}
