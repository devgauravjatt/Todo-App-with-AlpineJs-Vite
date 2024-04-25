// @ts-nocheck
import collapse from '@alpinejs/collapse'
import Alpine from 'alpinejs'
import './style.css'

Alpine.plugin(collapse)
window.Alpine = Alpine

Alpine.data('appInfo', () => ({ appTitle: 'Todo App with Alpine Js + Vite' }))

Alpine.data('tododata', () => ({
	todos: [
		'😍 Hello, I am Dev Gaurav Jatt',
		'🥣 This is todo app with Alpine Js',
	],
	inputText: '',

	addTodo() {
		this.todos.unshift(this.inputText)
		this.inputText = ''
	},
	// remove todo by index

	removeTodo(index) {
		this.todos.splice(index, 1)
		console.log(index)
	},

	removeAll() {
		this.todos = []
	},
}))

Alpine.start()
