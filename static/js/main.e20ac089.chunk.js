(window["webpackJsonpre-store"]=window["webpackJsonpre-store"]||[]).push([[0],{29:function(e,t,n){e.exports=n(46)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),l=n.n(o),c=n(8),i=n(10),u=n(9),s=function(e){var t=e.numItems,n=e.total;return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(i.b,{to:"/",className:"logo-link"},r.a.createElement("div",{className:"logo text-dark"},"ReStore")),r.a.createElement(i.b,{to:"/cart",className:"shopping-cart-link"},r.a.createElement("div",{className:"shopping-cart"},r.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",n,")")))},m=(n(39),s),d=n(11),E=n(12),p=n(18),f=n(17),h=n(19),b=function(){return r.a.createElement("div",{className:"lds-css ng-scope",style:{width:"200px",height:"200px"}},r.a.createElement("div",{className:"lds-spin",style:{width:"100%",height:"100%"}},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))},v=(n(40),b),g=function(){return r.a.createElement("div",null,"ErrorIndicator!")},O=(n(41),g),k=function(e){var t=e.book,n=e.onAddedToCart,a=t.title,o=t.author,l=t.price,c=t.coverImage;return r.a.createElement("div",{className:"book-list-item"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{src:c,alt:"cover"})),r.a.createElement("div",{className:"book-details"},r.a.createElement("span",{className:"book-title"},a),r.a.createElement("div",{className:"book-author"},o),r.a.createElement("div",{className:"book-price"},"$",l),r.a.createElement("button",{onClick:n,className:"btn btn-info add-to-cart",type:"button"},"Add to cart")))},C=(n(42),k),_=function(e){var t=e.books,n=e.onAddedToCart;return r.a.createElement("ul",{className:"book-list"},t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(C,{book:e,onAddedToCart:function(){return n(e.id)}}))}))},y=(n(43),_),I=r.a.createContext(),S=I.Provider,T=I.Consumer,N=function(){return function(e){return function(t){return r.a.createElement(T,null,function(n){return r.a.createElement(e,Object.assign({},t,{bookstoreService:n}))})}}},j=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},A=function(e,t){return function(){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then(function(e){return t({type:"FETCH_BOOKS_SUCCESS",payload:e})}).catch(function(e){return t(function(e){return{type:"FETCH_BOOKS_FAILURE",payload:e}}(e))})}},R=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchBooks)()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,a=e.error,o=e.onAddedToCart;return n?r.a.createElement(v,null):a?r.a.createElement(O,null):r.a.createElement(y,{books:t,onAddedToCart:o})}}]),t}(a.Component),B=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(N(),Object(c.b)(function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}},function(e,t){var n=t.bookstoreService;return{fetchBooks:A(n,e),onAddedToCart:function(t){return e(j(t))}}}))(R),w=function(){return r.a.createElement("div",null,r.a.createElement(B,null))},D={onIncrease:j,onDecrease:function(e){return{type:"BOOK_REMOVED_FROM_CART",payload:e}},onDelete:function(e){return{type:"ALL_BOOKS_REMOVED_FROM_CART",payload:e}}},L=Object(c.b)(function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}},D)(function(e){var t=e.items,n=e.total,a=e.onIncrease,o=e.onDecrease,l=e.onDelete;return 0===t.length?r.a.createElement("h2",{className:"shopping-cart-table"},"Your Cart is Empty!"):r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",null,"Your Order"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Count"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.map(function(e,t){var n=e.id,c=e.title,i=e.count,u=e.total;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t+1),r.a.createElement("td",null,c),r.a.createElement("td",null,i),r.a.createElement("td",null,"$",u),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return l(n)},className:"btn btn-outline-danger btn-sm float-right",type:"button"},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("button",{onClick:function(){return a(n)},className:"btn btn-outline-success btn-sm float-right",type:"button"},r.a.createElement("i",{className:"fa fa-plus-circle"})),r.a.createElement("button",{onClick:function(){return o(n)},className:"btn btn-outline-warning btn-sm float-right",type:"button"},r.a.createElement("i",{className:"fa fa-minus-circle"}))))}))),r.a.createElement("div",{className:"total"},"Total: $",n))}),K=(n(44),L),F=function(){return r.a.createElement("div",null,r.a.createElement(K,null))},M=Object(c.b)(function(e){var t=e.shoppingCart;return{cartItems:t.cartItems,orderTotal:t.orderTotal}})(function(e){var t=e.cartItems,n=e.orderTotal;return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(m,{numItems:t.reduce(function(e,t){return e+t.count},0),total:n}),r.a.createElement("div",{className:"container"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:w,exact:!0}),r.a.createElement(u.a,{path:"/cart",component:F}))))}),H=(n(45),M),x=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(h.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?r.a.createElement(O,null):t}}]),t}(a.Component),P=function(){function e(){Object(d.a)(this,e),this.data=[{id:1,title:"Structure and Interpretation of Computer Programs",author:"Harold Abelson",price:103,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41H43ADrEGL.jpg"},{id:2,title:"Steve Jobs",author:"Walter Isaacson",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41EQKL0jMhL._SX325_BO1,204,203,200_.jpg"},{id:3,title:"Extreme Programming",author:"Ward Cunningham",price:52,coverImage:"https://images-na.ssl-images-amazon.com/images/I/51w9bK86OVL._SX302_BO1,204,203,200_.jpg"},{id:4,title:"Clean Code",author:"Robert C. Martin",price:15,coverImage:"https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX385_BO1,204,203,200_.jpg"},{id:5,title:"The 7 Habits of Highly Effective People",author:"Stephen R. Covey",price:25,coverImage:"https://images-na.ssl-images-amazon.com/images/I/51ePAUjnwmL._SX332_BO1,204,203,200_.jpg"}]}return Object(E.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise(function(t){return setTimeout(function(){return t(e.data)},700)})}}]),e}(),U=n(16),J=function(e,t){if(!e)return{books:[],loading:!0,error:null};switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:!0};default:return e.bookList}},z=n(20),V=function(e){return e.reduce(function(e,t){return e+t.total},0)},X=function(e,t,n){var a=e.shoppingCart.cartItems,r=e.bookList.books,o=a.findIndex(function(e){return e.id===t}),l=a[o],c=function(e,t,n){return-1===n?[].concat(Object(z.a)(e),[t]):[].concat(Object(z.a)(e.slice(0,n)),[t],Object(z.a)(e.slice(n+1)))}(a,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,o=t.title,l=void 0===o?e.title:o,c=t.count,i=void 0===c?0:c,u=t.total,s=void 0===u?0:u,m=i+n,d=e?e.price:s/i,E=s+d*n;return{id:r,title:l,count:m>1?m:1,total:E>d?E:d}}(r.find(function(e){return e.id===t}),l,n),o);return localStorage.setItem("cart",JSON.stringify(c)),{orderTotal:V(c),cartItems:c}},$=function(e,t){if(!e){var n=localStorage.getItem("cart");if(n){var a=JSON.parse(n);return{cartItems:a,orderTotal:V(a)}}return{cartItems:[],orderTotal:0}}switch(t.type){case"BOOK_ADDED_TO_CART":return X(e,t.payload,1);case"BOOK_REMOVED_FROM_CART":return X(e,t.payload,-1);case"ALL_BOOKS_REMOVED_FROM_CART":var r=e.shoppingCart.cartItems.filter(function(e){return e.id!==t.payload});return localStorage.setItem("cart",JSON.stringify(r)),{orderTotal:V(r),cartItems:r};default:return e.shoppingCart}},Q=function(e,t){return{bookList:J(e,t),shoppingCart:$(e,t)}},G=Object(U.b)(Q),W=new P;l.a.render(r.a.createElement(c.a,{store:G},r.a.createElement(x,null,r.a.createElement(S,{value:W},r.a.createElement(i.a,null,r.a.createElement(H,null))))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e20ac089.chunk.js.map