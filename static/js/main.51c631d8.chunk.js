(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{18:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),s=a.n(o),c=(a(18),a(9)),i=a.n(c),l=a(12),u=a(10),h=a(3),m=a(4),d=a(6),p=a(5),b=a(8),j=(a(20),function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("11753469-fae5ae7c0c549b8c5c7373ba2","&image_type=photo&orientation=horizontal&per_page=12"));case 2:if((n=e.sent).ok){e.next=5;break}throw n;case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),g=j,f=a(1),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.changeHandler=function(t){e.setState({value:t.target.value})},e.submitHandler=function(t){t.preventDefault(),""!==e.state.value.trim()?(e.props.onSubmit(e.state.value),e.setState({value:""})):b.b.error("Please enter search request!")},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:this.submitHandler,children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.changeHandler,value:this.state.value})]})})}}]),a}(n.Component),O=v,x=a(2),y=a.n(x),w=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsx)("li",{className:"ImageGalleryItem",children:Object(f.jsx)("img",{src:this.props.webformatURL,alt:"",className:"ImageGalleryItem-image",onClick:this.props.showImageHandle})})}}]),a}(n.Component);w.propType={img:y.a.string.isRequired,showImageHandle:y.a.func.isRequired};var H=w,I=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsx)("ul",{className:"ImageGallery",children:this.props.images.map((function(t,a){return Object(f.jsx)(H,{webformatURL:t.webformatURL,showImageHandle:e.props.showImageHandler(t.largeImageURL),index:a},t.id)}))})}}]),a}(n.Component),k=I,S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsx)("button",{type:"button",className:"Button",onClick:this.props.loadMoreHandler,children:"Load more"})}}]),a}(n.Component);S.propType={loadMoreHandler:y.a.func.isRequired};var L=S,C=a(13),M=a.n(C),N=(a(42),function(){return Object(f.jsx)("div",{className:"Loader",children:Object(f.jsx)(M.a,{type:"ThreeDots",color:"#00BFFF",height:150,width:150})})}),R=document.querySelector("#modalRoot"),U=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).keyDownHandler=function(t){"Escape"===t.code&&e.props.onClose()},e.overlayClickHandler=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyDownHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyDownHandler)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:this.overlayClickHandler,children:Object(f.jsx)("div",{className:"Modal",children:Object(f.jsx)("img",{src:this.props.largeImgURL,alt:""})})}),R)}}]),a}(n.Component),T=U,F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchItem:"",page:1,isLoading:!1,openModal:!1,error:""},e.maxPages=0,e.largeImgURL="",e.newElementHight=0,e.closeModal=function(){e.largeImgURL="",e.setState({openModal:!1})},e.showImageHandler=function(t){return function(){e.largeImgURL=t,e.setState({openModal:!0})}},e.scrollToHandler=function(){var e=document.documentElement.scrollHeight-150;setTimeout((function(){window.scrollTo({top:e,behavior:"smooth"})}),500)},e.searchImagesHandler=Object(u.a)(i.a.mark((function t(){var a,n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.searchItem,r=a.page,e.setState({isLoading:!0,error:""}),t.prev=2,t.next=5,g(n,r);case 5:0!==(o=t.sent).total?(e.maxPages=Math.ceil(o.totalHits/12),e.setState((function(e){var t=e.images;return{images:[].concat(Object(l.a)(t),Object(l.a)(o.hits))}}))):(b.b.info("Nothing found for ".concat(n,"!")),e.setState((function(){return{images:[]}}))),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0),e.setState((function(){return{error:t.t0.toString()}}));case 13:return t.prev=13,e.setState({isLoading:!1}),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,9,13,16]])}))),e.loadMoreHandler=function(){e.scrollToHandler(),e.setState((function(){return{page:Math.min(e.maxPages,e.state.page+1)}}))},e.onSubmitHandler=function(t){e.maxPages=0,e.setState((function(){return{images:[],searchItem:t,page:1}}))},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){(t.searchItem!==this.state.searchItem&&""!==this.state.searchItem||t.page!==this.state.page)&&this.searchImagesHandler()}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(O,{onSubmit:this.onSubmitHandler}),this.state.error?Object(f.jsx)("p",{className:"ErrorText",children:this.state.error}):Object(f.jsx)(k,{images:this.state.images,showImageHandler:this.showImageHandler,scrollToHandler:this.scrollToHandler}),this.state.isLoading&&Object(f.jsx)(N,{}),this.state.page<this.maxPages&&Object(f.jsx)(L,{loadMoreHandler:this.loadMoreHandler}),this.state.openModal&&Object(f.jsx)(T,{largeImgURL:this.largeImgURL,onClose:this.closeModal}),Object(f.jsx)(b.a,{autoClose:2e3})]})}}]),a}(n.Component),D=F;s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.51c631d8.chunk.js.map