export default{
	todo_list: function(state=[],action){
		return state;
	},
	add_cart: function(state=[],action){
		switch(action.type){
			case "ADD_TODO_CART":
				var cart-data = action.payload;
				return cart-data;
			default:
				return state
		}
		return state;
	}
}