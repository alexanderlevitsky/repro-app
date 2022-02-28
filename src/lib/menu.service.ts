import { Injectable } from '@angular/core';
// const d3ContextMenu = require('d3-context-menu');
import { d3ContextMenu } from 'd3-context-menu';

@Injectable({providedIn: 'root'})
export class MenuService {

  closeMenu() {
    d3ContextMenu('close');
  }
}
