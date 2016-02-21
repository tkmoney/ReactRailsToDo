var AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register(function (payload) {
  switch (payload.eventName) {
    case 'new-todo':
      DataStore.addTodo(payload.data);
      break;
    case 'delete-todo':
      DataStore.deleteTodo(payload.data.id);
      break;
    case 'update-todo':
      DataStore.updateTodo(payload.data);
      break;
    case 'get-todos':
      DataStore.replaceTodos(payload.data);
      break;
    default:
      break;
  }

  return true;

});
