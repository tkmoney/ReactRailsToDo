var XhrService = (function(){
  var _rootPath = '/todos';
  var _auth_token = AUTH_TOKEN; // this is set in the rails application layout

  if(typeof(qwest) === 'undefined'){
    console.error('qwest lib was not found, make sure it has been loaded');
  }

  var getResourcePathById = function (id) {
     return '%/^.json'.replace('%', _rootPath).replace('^', id)
  }

  var getRootResourcePath = function () {
    return ('%.json'.replace('%',_rootPath));
  }

  var getAll = function () {
    return qwest.get(getRootResourcePath());
  }

  var add = function (data) {
    return qwest.post(getRootResourcePath(), {
      todo:{
        description: data.description,
        done: false
      },
      authenticity_token: AUTH_TOKEN
    });
  }

  var updateById = function (id, data) {
    return qwest.put(getResourcePathById(id), {
      todo:{
        description: data.description,
        done: data.done
      },
      authenticity_token: AUTH_TOKEN
    });
  }

  var deleteById = function (id) {
    return qwest.delete(getResourcePathById(id), {
      authenticity_token: AUTH_TOKEN
    })
  }

  return {
    getAll: getAll,
    deleteById: deleteById,
    add: add,
    updateById: updateById
  }
})();