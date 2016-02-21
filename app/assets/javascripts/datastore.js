var DataStore = {

  _todos: [],

  addTodo: function (data) {
    console.log(data)
    this._todos.push(data);
    this.trigger("onchange");
  },

  deleteTodo: function (id) {
    var index = this.getArrayIndexForKey(this._todos, "id", id);
    this._todos.splice(index,1);
    this.trigger("onchange");
  },

  updateTodo: function (data) {
    var index = this.getArrayIndexForKey(this._todos, "id", data.id);
    this._todos[index] = data;
    this.trigger("onchange");
  },

  replaceTodos: function (todos) {
    this._todos = todos;
    this.trigger("onchange");
  },

  getAll: function () {
    return this._todos;
  },

  getItemById: function (id) {
    var index = this.getArrayIndexForKey(this._todos, "id", id);
    return this._todos[index];
  },

  getItemAtIndex: function (index) {
    return this._todos[index];
  },

  getItemsBetween: function (start_id, end_id) {
    var start_index = this.getArrayIndexForKey(this._todos, "id", start_id);
    var end_index = this.getArrayIndexForKey(this._todos, "id", end_id);
    var s = Math.min(start_index, end_index);
    var e = (Math.max(start_index, end_index)+1); //add one to be inclusive
    return (this._todos.slice(s,e));
  },

  getArrayIndexForKey: function(arr, key, val){
      for(var i = 0; i < arr.length; i++){
          if(arr[i][key] == val)
              return i;
      }
      return -1;
  }

};

MicroEvent.mixin( DataStore );  