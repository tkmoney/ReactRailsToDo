ToDoAction = {
  shiftIsDown: false,

  itemSelectionRange: [],

  onItemClick: function (id) {
    if(this.shiftIsDown){
      if(this.itemSelectionRange.length > 2){
        this.itemSelectionRange = [];
      };
      this.itemSelectionRange.push(id);

      if(this.itemSelectionRange.length === 2){
        var items = DataStore.getItemsBetween(this.itemSelectionRange[0], this.itemSelectionRange[1]);
        for(var i = 0; i < items.length; i++){
          var itm = items[i];
          itm.done = !(itm.done);
          this.update(itm.id, itm);
        }

        this.itemSelectionRange = [];
      }
    }else{// !this.shiftIsDown
      var itm = DataStore.getItemById(id);
      itm.done = !(itm.done);
      this.update(id, itm);
    }
  },

  add: function(data){
    XhrService.add({description: data.description}).then(function (xhr, response) {
      AppDispatcher.dispatch({
        eventName:'new-todo',
        data: response
      });
    }).catch(function (e) {
      console.error('call to POST /todos.json failed', e);
    });
  },
  delete: function (id) {
    XhrService.deleteById(id).then(function (xhr, response) {
      AppDispatcher.dispatch({
        eventName:'delete-todo',
        data: {id: id}
      });
    }).catch(function (argument) {
      console.error('call to DELETE /todos/%.json failed'.replace('%', id), e);
    });
  },
  update: function (id, data) {
    var update_data = {description: data.description, done: data.done};
    XhrService.updateById(id, update_data).then(function (xhr, response) {
      AppDispatcher.dispatch({
        eventName:'update-todo',
        data: response
      });
    }).catch(function (e) {
      console.error('call to PUT /todos/%.json failed'.repalce('%', id), e);
    });
  },
  getAll: function () {
  	XhrService.getAll().then(function (xhr, response) {
      AppDispatcher.dispatch({
        eventName:'get-todos',
        data: response
      });
  	}).catch(function (e) {
  		console.error('call to /todos.json failed', e);
  	});
  }
};

window.addEventListener('keydown', function (e) {
  if(e.key === 'Shift'){
    ToDoAction.shiftIsDown = true;
  }
})

window.addEventListener('keyup', function (e) {
  if(e.key === 'Shift'){
    ToDoAction.shiftIsDown = false;
    ToDoAction.itemSelectionRange = [];
  }
})
