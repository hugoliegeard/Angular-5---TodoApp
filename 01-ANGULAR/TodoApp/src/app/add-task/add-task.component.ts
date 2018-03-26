import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  /**
   * Permet d'émettre un évènement lors
   * de la création d'une tâche.
   * @type {EventEmitter<any>}
   */
  @Output() newTaskEvent = new EventEmitter();

  /**
   * La tâche à créer.
   * @type {Task}
   */
  task: Task = new Task();

  /**
   * Permet de réinitialiser le formulaire
   * @type {boolean}
   */
  active = true;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Fonction appelée lors de la
   * création d'une tâche.
   * (Submit du Formulaire)
   */
  addTask() {

    /**
     * Lorque l'utilisateur soumet le formulaire
     * j'émet l'évènement avec la nouvelle tâche.
     */
    this.newTaskEvent.emit({task: this.task});

    /** Réinitialisation de la tâche @type {Task} */
    this.task = new Task();

    /** Réinitialisation du Formulaire @type {boolean} */
    this.active = false;
    setTimeout(() => this.active = true, 0);

  }
}
