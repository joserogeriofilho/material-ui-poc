(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,a,t){e.exports=t(167)},142:function(e,a,t){},167:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),l=t.n(i),o=(t(142),t(23)),s=t(24),c=t(34),m=t(30),u=t(35),p=t(244),d=t(117),g=t(245),h=t(119),f=t(14),E=t(42),b=t(168),v=t(224),w=t(225),N=t(90),y=t(50),j=t(218),x=t(248),O=t(77),C=t(18),k=t(67),S=t(214),P=t(118),D=t(216),U=t(217),R=t(215),T=t(170),I=t(219),M=t(220),q=t(27),A=t(250);function W(){localStorage.setItem("Bearer",""),document.location.href=""}function B(){return localStorage.getItem("Bearer")}var _=[{label:"Home",pathname:"/",icon:"home"},{label:"Users",pathname:"/users",icon:"person"},{label:"Nested Routes",pathname:"/nestedroutes",icon:"view_compact"}];var L=Object(E.g)(Object(b.a)(function(e){return{spacing:{padding:e.spacing(2)},height100:{height:"100%"},drawerPaper:{position:"static",width:"240px",justifyContent:"space-between"},drawerHeader:{backgroundColor:e.palette.primary.main,color:"white",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"128px",padding:"20px"},drawerTitle:{lineHeight:"125%",fontSize:"0.875rem",fontWeight:500},userInfo:{display:"flex",flexDirection:"column",lineHeight:"1"},userName:{fontSize:"14px",fontWeight:"400"},userEmail:{fontSize:"12px",fontWeight:"500",display:"flex",alignItems:"center",justifyContent:"space-between",opacity:"0.55"},item:{fontWeight:"500",fontSize:"14px"},selectedItem:{color:e.palette.secondary.main,backgroundColor:"transparent !important","& .MuiListItemIcon-root":{color:e.palette.secondary.main}},logoutItemMenu:{color:e.palette.secondary.main}}},{withTheme:!0})(function(e){var a=e.classes,t=r.a.useState(null),n=Object(O.a)(t,2),i=n[0],l=n[1],o=function(){l(null)},s=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(y.a,{variant:"h6",className:a.drawerTitle},"MATERIAL-UI POC"),r.a.createElement("div",{className:a.userInfo},r.a.createElement("span",{className:a.userName},"John Doe"),r.a.createElement(k.a,{className:a.userEmail,onClick:function(e){console.log(e),l(e.currentTarget)}},r.a.createElement("span",null,"john.doe@somemail.com"),r.a.createElement(S.a,null,"arrow_drop_down"))),r.a.createElement(P.a,{id:"user-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:o},r.a.createElement("div",{className:a.spacing},r.a.createElement("span",{className:a.userName},"John Doe"),r.a.createElement("span",{className:a.userEmail},"john.doe@somemail.com")),r.a.createElement(D.a,null),r.a.createElement(U.a,{onClick:o,dense:!0},"Lorem ipsum"),r.a.createElement(U.a,{onClick:o,dense:!0},"Et dolorem"),r.a.createElement(U.a,{onClick:W,dense:!0,className:a.logoutItemMenu},"Logout"))),r.a.createElement(R.a,null,_.map(function(t,n){return r.a.createElement(T.a,{component:t.external?j.a:C.b,href:t.external?t.pathname:null,to:t.external?null:{pathname:t.pathname,search:e.location.search},selected:(i=t.pathname,l=e.location.pathname,"/"!==i?!!l.startsWith(i):"/"===l),classes:{root:a.itemRoot,selected:a.selectedItem},button:!0,onClick:e.mobileMenuClose,key:t.label},r.a.createElement(I.a,null,r.a.createElement(S.a,null,t.icon)),r.a.createElement(M.a,{primary:t.label,classes:{primary:a.item}}));var i,l}))));return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:a.height100,smDown:!0,implementation:"css"},r.a.createElement(q.a,{anchor:"left",variant:"permanent",classes:{paper:a.drawerPaper,docked:a.height100}},s)),r.a.createElement(x.a,{smUp:!0,implementation:"css"},r.a.createElement(A.a,{anchor:"left",variant:"temporary",open:e.menuDrawer,onOpen:e.mobileMenuOpen,onClose:e.mobileMenuClose,classes:{paper:a.drawerPaper,docked:a.height100}},s)))})),H=t(222),V=t(223),F=t(221),z=t(111),G=Object(z.a)(function(e){return{root:{maxHeight:"60px"},linkButton:{color:"white"}}});function J(e){var a=G(),t=r.a.createElement(F.a,{onClick:e.mobileMenuOpen,edge:"start",color:"inherit","aria-label":"Menu"},r.a.createElement(S.a,null,"menu")),n=r.a.createElement(F.a,{href:e.returnTo,className:a.linkButton,edge:"start","aria-label":"Return"},r.a.createElement(S.a,null,"arrow_back"));return r.a.createElement(H.a,{position:"relative",className:a.root},r.a.createElement(V.a,null,"undefined"===typeof e.returnTo?t:n,r.a.createElement(y.a,{variant:"h6"},e.title)))}var Y=t(76),K=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).mobileMenuOpen=function(e){t.props.openNavDrawer()},t.mobileMenuClose=function(e){t.props.closeNavDrawer()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.outsideWrapper},r.a.createElement(L,{menuDrawer:this.props.navDrawer,mobileMenuOpen:this.mobileMenuOpen,mobileMenuClose:this.mobileMenuClose}),r.a.createElement("div",{className:e.insideWrapper},r.a.createElement(x.a,{mdUp:!0,implementation:"css"},r.a.createElement(J,{returnTo:this.props.returnTo,title:this.props.title,mobileMenuOpen:this.mobileMenuOpen})),r.a.createElement("div",{className:e.content,id:"content"},this.props.children)))}}]),a}(n.Component),$=Object(E.g)(Object(Y.b)(function(e){return{navDrawer:e.navDrawerReducer}},{openNavDrawer:function(){return{type:"OPEN_NAV_DRAWER"}},closeNavDrawer:function(){return{type:"CLOSE_NAV_DRAWER"}}})(Object(b.a)(function(e){return{outsideWrapper:{display:"flex",height:"100%",overflow:"hidden"},insideWrapper:{width:"100%",height:"100%",overflowY:"auto"},content:{}}},{withTheme:!0})(K))),X="Home";var Q=Object(E.g)(Object(b.a)(function(e){return{wrapper:Object(f.a)({padding:e.spacing(3,5,5,5)},e.breakpoints.down("xs"),{padding:e.spacing(3)}),paper:Object(f.a)({margin:e.spacing(3,0,5,0),padding:e.spacing(5,3,5,3)},e.breakpoints.down("xs"),{backgroundColor:"transparent",boxShadow:"none",margin:0,padding:e.spacing(0)}),title:{fontWeight:"200"}}})(function(e){var a=e.classes;return r.a.createElement($,{title:X},r.a.createElement(v.a,{className:a.wrapper},r.a.createElement(w.a,{container:!0,spacing:3},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(N.a,{className:a.paper},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(y.a,{align:"center",variant:"h4",className:a.title},"Material-UI"),r.a.createElement(y.a,{align:"center",color:"secondary",variant:"h6"},"Proof of Concept"),r.a.createElement(y.a,{align:"center"},"A simple proof of concept React application built with Material-UI components and Redux."),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h6"},"Main Technologies"),r.a.createElement("ul",null,r.a.createElement("li",null,"React v.4.04"),r.a.createElement("li",null,"Material-UI v.4.04"),r.a.createElement("li",null,"Redux v.4.04")),r.a.createElement(y.a,{variant:"h6"},"How to use it"),r.a.createElement("p",null,"Fork this project on GitHub and modify its content to suit your needs."),r.a.createElement(y.a,{variant:"h6"},"GitHub Repository"),r.a.createElement(j.a,{href:"https://github.com/joserogeriofilho/material-ui-poc",color:"secondary"},"joserogeriofilho/material-ui-poc")))),r.a.createElement(w.a,{item:!0,xs:12},"\u200b\u200b\u200b\u200b\u200b\u200b\u200b",r.a.createElement(y.a,{align:"center"},"If you like to see more of my work:",r.a.createElement("br",null),r.a.createElement(j.a,{target:"_blank",href:"https://github.com/joserogeriofilho",color:"secondary"},"GitHub")," |",r.a.createElement(j.a,{target:"_blank",href:"https://www.linkedin.com/in/joserogeriofilho/",color:"secondary"}," Linkedin")," |",r.a.createElement(j.a,{target:"_blank",href:"https://www.behance.net/joserogeriofilho",color:"secondary"}," Behance")),r.a.createElement("br",null),r.a.createElement(y.a,{align:"center"},"Contact",r.a.createElement("br",null),"jose.rogerio.filho@gmail.com")))))})),Z=t(113),ee=t(247),ae=t(242),te=t(115),ne=t.n(te),re=t(11),ie=t(227),le=t(228),oe=t(231),se=t(230),ce=t(232),me=t(251),ue=t(229),pe=t(85),de=t.n(pe),ge=t(87),he=t.n(ge),fe=t(86),Ee=t.n(fe),be=t(84),ve=t.n(be),we=t(226),Ne=0,ye=Object(z.a)(function(e){return{wrapper:{flexShrink:0,color:e.palette.text.secondary,marginLeft:e.spacing(2.5),width:"100%"}}});function je(e){var a=ye(),t=Object(re.a)(),n=e.count,i=e.page,l=e.rowsPerPage,o=e.onChangePage;return r.a.createElement("div",{className:a.wrapper},r.a.createElement(F.a,{onClick:function(){o(Ne)},disabled:i===Ne,"aria-label":"first page"},"rtl"===t.direction?r.a.createElement(ve.a,null):r.a.createElement(de.a,null)),r.a.createElement(F.a,{onClick:function(){o(i-1)},disabled:i===Ne,"aria-label":"previous page"},"rtl"===t.direction?r.a.createElement(Ee.a,null):r.a.createElement(he.a,null)),r.a.createElement(F.a,{onClick:function(){o(i+1)},disabled:i>=Math.ceil(n/l)-1,"aria-label":"next page"},"rtl"===t.direction?r.a.createElement(he.a,null):r.a.createElement(Ee.a,null)),r.a.createElement(F.a,{onClick:function(){o(Math.max(Ne,Math.ceil(n/l)-1))},disabled:i>=Math.ceil(n/l)-1,"aria-label":"last page"},"rtl"===t.direction?r.a.createElement(de.a,null):r.a.createElement(ve.a,null)))}var xe=Object(z.a)(function(e){return{wrapper:{overflowX:"auto"},actionsWrapper:{display:"flex",justifyContent:"center"},paginationRoot:{borderBottom:"0"},link:{textDecoration:"none"},loading:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100px"}}});function Oe(e){var a=xe(),t=e.users,n=e.totalCount,i=e.page,l=e.rowsPerPage,o=e.isLoading,s=e.error,c=e.onDeleteUser,m=e.onChangePage,u=e.onChangeRowsPerPage;return o?r.a.createElement("div",{className:a.loading},r.a.createElement(we.a,{color:"secondary"})):s?r.a.createElement("div",null,r.a.createElement("span",null,"An error ocurred:"),r.a.createElement("p",null,s.toString())):r.a.createElement("div",{className:a.wrapper},r.a.createElement(ie.a,{size:"small"},r.a.createElement(le.a,null,r.a.createElement(ue.a,null,r.a.createElement(se.a,null,"Last Name"),r.a.createElement(se.a,null,"First Name"),r.a.createElement(se.a,null,"Username"),r.a.createElement(se.a,null,"E-mail"),r.a.createElement(se.a,{align:"center"},"Actions"))),r.a.createElement(oe.a,null,t.map(function(e){return r.a.createElement(ue.a,{key:e.id},r.a.createElement(se.a,{component:"th",scope:"row"},e.lastName),r.a.createElement(se.a,null,e.firstName),r.a.createElement(se.a,null,e.userName),r.a.createElement(se.a,null,e.email),r.a.createElement(se.a,{align:"center"},r.a.createElement("div",{className:a.actionsWrapper},r.a.createElement(F.a,{"aria-label":"Edit",component:C.b,to:"/users/single/".concat(e.id)},r.a.createElement(S.a,null,"edit")),r.a.createElement(F.a,{onClick:function(){return c(e.id)},"aria-label":"Delete"},r.a.createElement(S.a,null,"delete")))))})),r.a.createElement(ce.a,null,r.a.createElement(ue.a,null,r.a.createElement(me.a,{classes:{root:a.paginationRoot},rowsPerPageOptions:[5,10,25],colSpan:2,count:n,rowsPerPage:l,page:i,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e){return m(e)},onChangeRowsPerPage:function(e){return u(parseInt(e.target.value,10))},ActionsComponent:je})))))}var Ce=t(235),ke=t(88),Se=t.n(ke),Pe=Object(z.a)(function(e){return{root:{display:"flex",alignItems:"stretch",height:"100%","& .MuiGrid-root":{display:"flex",justifyContent:"center",alignItems:"center"}},scoreHeader:Object(f.a)({backgroundColor:Se.a[100],borderRadius:"4px 0 0 4px",color:Se.a[500],height:"100%",padding:e.spacing(3)},e.breakpoints.down("lg"),{padding:e.spacing(2)}),scoreIcon:{fontSize:"2.25rem"},scoreBody:Object(f.a)({flexDirection:"column",padding:e.spacing(3)},e.breakpoints.down("lg"),{padding:e.spacing(2)}),scoreNumber:{fontSize:"2.25rem",fontWeight:"300",marginTop:"-8px"},scoreLabel:{fontSize:"1rem",fontWeight:"500",marginTop:"-4px",textAlign:"center"}}});function De(e){var a=Pe();return r.a.createElement(Ce.a,{className:a.root},r.a.createElement(w.a,{container:!0},r.a.createElement(x.a,{smDown:!0},r.a.createElement(w.a,{item:!0,md:4,className:a.scoreHeader},r.a.createElement(S.a,{className:a.scoreIcon},e.icon))),r.a.createElement(w.a,{item:!0,xs:12,md:8,className:a.scoreBody},r.a.createElement(y.a,{color:"secondary",className:a.scoreNumber},e.value),r.a.createElement(y.a,{className:a.scoreLabel},e.label))))}var Ue=t(236),Re=Object(z.a)(function(e){return{scrim:{background:"transparent",boxShadow:"none",overflow:"hidden"}}});function Te(e){var a=e.open,t=Re();return r.a.createElement(Ue.a,{open:a,classes:{paper:t.scrim},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(we.a,{color:"secondary"}))}var Ie=t(241),Me=t(238),qe=t(239),Ae=t(240),We=t(237);function Be(e){var a=e.open,t=e.title,n=e.message,i=e.handleDialogConfirm;return r.a.createElement(Ue.a,{open:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(We.a,{id:"alert-dialog-title"},t),r.a.createElement(Me.a,null,r.a.createElement(qe.a,{id:"alert-dialog-description"},n)),r.a.createElement(Ae.a,null,r.a.createElement(Ie.a,{onClick:i,color:"secondary"},"OK")))}var _e=t(114),Le=t.n(_e).a.create({baseURL:"https://react-showcase-server.herokuapp.com/"});Le.interceptors.request.use(function(e){return e.headers.Authorization="Bearer "+B(),e}),Le.interceptors.response.use(function(e){return e.authToken="ihc908yc987y239hfy7t0173ryvc9rygt08gh028ry2",e});var He=Le,Ve=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"getUsers",value:function(e,a,t){return new Promise(function(n,r){He.get("users?_sort=lastName",{params:{_page:e,_limit:a,q:t}}).then(function(e){switch(e.status){case 200:n({data:e.data,totalCount:e.headers["x-total-count"]});break;case 401:W(),r(new Error("Your session has expired"));break;default:r(new Error("Something went wrong"))}}).catch(function(e){r(e)})})}},{key:"getUser",value:function(e){return new Promise(function(a,t){He.get("users",{params:{id:e}}).then(function(e){switch(e.status){case 200:e.data.length>0?a(e.data[0]):t(new Error("No user found"));break;case 401:W(),t(new Error("Your session has expired"));break;default:t(new Error("Something went wrong"))}}).catch(function(e){t(e)})})}},{key:"postUser",value:function(e){return new Promise(function(a,t){He.post("users",{firstName:e.firstName,lastName:e.lastName,userName:e.userName,email:e.email}).then(function(e){201===e.status?a(e):t(new Error("Something went wrong"))}).catch(function(e){t(e)})})}},{key:"putUser",value:function(e){return new Promise(function(a,t){He.put("".concat("users","/").concat(e.id),{firstName:e.firstName,lastName:e.lastName,userName:e.userName,email:e.email}).then(function(e){200===e.status?a(e):t(new Error("Something went wrong"))}).catch(function(e){console.log(e),t(e)})})}},{key:"deleteUser",value:function(e){return new Promise(function(a,t){He.delete("".concat("users","/").concat(e)).then(function(e){200===e.status?a(e):t(new Error("Something went wrong"))}).catch(function(e){t(e)})})}}]),e}();function Fe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function ze(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Fe(Object(t),!0).forEach(function(a){Object(f.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Fe(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Ge=500,Je=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).getUsers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.searchValue;t.setState({loadingUsers:!0}),Ve.getUsers(t.state.pagination.page+1,t.state.pagination.rowsPerPage,e).then(function(e){t.setState({users:e.data,pagination:ze({},t.state.pagination,{totalCount:parseInt(e.totalCount,10)})})}).catch(function(e){t.setState({error:e})}).finally(function(){t.setState({loadingUsers:!1})})},t.handleDeleteUser=function(e){t.setState({loadingDelete:!0}),Ve.deleteUser(e).then(function(e){t.setState({dialogState:1}),t.getUsers()}).catch(function(e){t.setState({dialogState:2})}).finally(function(){t.setState({loadingDelete:!1})})},t.handleSearch=Object(Z.debounce)(function(e){t.setState({searchValue:e.toLowerCase(),pagination:ze({},t.state.pagination,{page:0})},function(){return t.getUsers()})},Ge),t.handleChangePage=function(e){t.setState({pagination:ze({},t.state.pagination,{page:e})},function(){return t.getUsers()})},t.handleChangeRowsPerPage=function(e){t.setState({pagination:ze({},t.state.pagination,{rowsPerPage:e})},function(){return t.getUsers()})},t.handleDialogClose=function(){t.setState({dialogState:0})},t.state={users:[],pagination:{page:0,totalCount:1,rowsPerPage:5},searchValue:"",loadingUsers:!1,loadingDelete:!1,error:null,dialogState:0},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state.users,n=this.state.pagination.page,i=this.state.pagination.totalCount,l=this.state.pagination.rowsPerPage,o=this.state.search,s=this.state.loadingUsers,c=this.state.error;return r.a.createElement($,{title:"Users"},r.a.createElement(v.a,{className:a.wrapper},r.a.createElement(w.a,{container:!0,spacing:3},r.a.createElement(x.a,{smDown:!0},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"h5",color:"secondary"},"Users"))),r.a.createElement(w.a,{item:!0,xs:12,sm:4},r.a.createElement(De,{icon:"people_outline",label:"Total users",value:"26"})),r.a.createElement(w.a,{item:!0,xs:6,sm:4},r.a.createElement(De,{icon:"work_outline",label:"Categories",value:"3"})),r.a.createElement(w.a,{item:!0,xs:6,sm:4},r.a.createElement(De,{icon:"cake_outline",label:"Mean age",value:"27,6"})),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(N.a,{className:a.paper},r.a.createElement(w.a,{container:!0,spacing:2},r.a.createElement(w.a,{container:!0,item:!0,xs:12,alignItems:"center"},r.a.createElement(w.a,{item:!0,xs:6},r.a.createElement(y.a,{variant:"h6",component:"h3"},"List and Search")),r.a.createElement(w.a,{item:!0,xs:6},r.a.createElement(ee.a,{id:"usersSearch",label:"Search",value:o,onChange:function(a){return e.handleSearch(a.target.value)},margin:"dense",variant:"outlined",fullWidth:!0}))),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(Oe,{users:t,page:n,totalCount:i,rowsPerPage:l,isLoading:s,error:c,onDeleteUser:this.handleDeleteUser,onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))))))),r.a.createElement(Te,{open:this.state.loadingDelete}),r.a.createElement(Be,{open:1===this.state.dialogState,title:"Success",message:"The user was removed successfully.",handleDialogConfirm:this.handleDialogClose}),r.a.createElement(Be,{open:2===this.state.dialogState,title:"Error",message:"Something went wrong. Please, try again.",handleDialogConfirm:this.handleDialogClose}),r.a.createElement(ae.a,{color:"secondary","aria-label":"add",className:a.floatButton,component:C.b,to:{pathname:"/users/single"}},r.a.createElement(ne.a,null)))}}]),a}(n.Component),Ye=Object(E.g)(Object(b.a)(function(e){return{wrapper:Object(f.a)({padding:e.spacing(3,5,5,5),marginTop:e.spacing(1)},e.breakpoints.down("xs"),{padding:e.spacing(3)}),paper:Object(f.a)({margin:e.spacing(3,0,5,0),padding:e.spacing(3)},e.breakpoints.down("xs"),{backgroundColor:"transparent",boxShadow:"none",margin:0,padding:e.spacing(0)}),paperButtons:{display:"flex",justifyContent:"space-between"},floatButton:{position:"absolute",bottom:e.spacing(3),right:e.spacing(3)}}})(Je)),Ke=t(246),$e=t(243);var Xe=Object(E.g)(Object(b.a)(function(e){return{wrapper:Object(f.a)({padding:e.spacing(3,5,5,5),marginTop:e.spacing(1)},e.breakpoints.down("xs"),{padding:e.spacing(3)}),hidePaperxsDown:Object(f.a)({},e.breakpoints.down("xs"),{backgroundColor:"transparent",boxShadow:"none",padding:e.spacing(0)}),mobileTabs:{top:"auto",bottom:0},content:Object(f.a)({padding:e.spacing(3)},e.breakpoints.down("xs"),{padding:e.spacing(0)})}})(function(e){var a=e.classes,t=e.match,i=Object(n.useState)(0),l=Object(O.a)(i,2),o=l[0],s=l[1],c=r.a.createElement(Ke.a,{variant:"fullWidth",value:o,onChange:function(e,a){s(a)},"aria-label":"simple tabs example"},r.a.createElement($e.a,{component:C.b,to:"".concat(t.url,"/first"),label:"First"}),r.a.createElement($e.a,{component:C.b,to:"".concat(t.url,"/second"),label:"Second"}),r.a.createElement($e.a,{component:C.b,to:"".concat(t.url,"/third"),label:"Third"}));return r.a.createElement($,{title:"Nested Routes"},r.a.createElement(v.a,{className:a.wrapper},r.a.createElement(w.a,{container:!0,spacing:3},r.a.createElement(x.a,{smDown:!0},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"h5",color:"secondary"},"Nested Routes"))),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(N.a,{className:a.hidePaperxsDown},r.a.createElement(x.a,{smDown:!0},r.a.createElement(H.a,{position:"static"},c)),r.a.createElement("div",{className:a.content},r.a.createElement(E.b,{value:o,index:0,path:"".concat(t.path,"/first"),component:Qe}),r.a.createElement(E.b,{value:o,index:1,path:"".concat(t.path,"/second"),component:Ze}),r.a.createElement(E.b,{value:o,index:2,path:"".concat(t.path,"/third"),component:ea}))))),r.a.createElement(E.b,{exact:!0,path:"".concat(t.path,"/"),component:function(){return r.a.createElement(E.a,{to:{pathname:"".concat(t.path,"/first")}})}})),r.a.createElement(x.a,{mdUp:!0},r.a.createElement(H.a,{className:a.mobileTabs,position:"fixed"},c)))}));function Qe(){return r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h6"},"Lorem ipsum dolor sit amet"),r.a.createElement("p",null,"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id diam quis nisl pellentesque ornare. Praesent luctus fermentum risus, id molestie justo accumsan et. Morbi bibendum quis ex in aliquet. Proin sit amet lorem nec mauris ornare tincidunt eget a diam. Duis mi neque, lobortis vel magna ac, condimentum tristique ipsum. Phasellus interdum tempor sem. Maecenas erat risus, consectetur ac malesuada id, rutrum eget libero. Phasellus mattis varius orci, ac tempus erat maximus vel. Suspendisse pharetra enim lacinia sapien tempus dignissim. Etiam vestibulum consequat porttitor. Praesent ac lacinia lectus. Vivamus eu posuere leo. Pellentesque hendrerit blandit sodales. Aliquam elementum, nibh quis finibus vulputate, mi purus ultricies nibh, eu tempus erat arcu nec turpis."))}function Ze(){return r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h6"},"Class aptent taciti sociosqu ad"),r.a.createElement(y.a,{variant:"subtitle2",color:"primary"},"Litora torquent per conubia nostra, per inceptos himenaeos."),r.a.createElement("p",null,"Morbi pellentesque leo eget sapien eleifend, id finibus mi laoreet. Phasellus ac tellus quis justo pharetra viverra nec vel ex. In ut fermentum arcu, sed congue purus. Etiam in suscipit purus. Nullam consequat diam quis consequat cursus. Aenean mattis id mauris at molestie. Aliquam ut molestie sapien. Maecenas placerat sem non tellus aliquam, a mollis mi mollis. Nam varius placerat mi, ut tincidunt lacus sodales at. Nulla vehicula nulla in tellus efficitur commodo. Integer vitae eros faucibus, laoreet mauris a, facilisis risus. Ut sodales ac ex consequat tempor. Fusce rhoncus dictum risus nec faucibus. Proin pharetra sapien sapien, vitae interdum ipsum faucibus at. Praesent ultricies mauris eget lectus tincidunt, ac viverra tellus fermentum."))}function ea(){return r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h6"},"Morbi in risus lacinia ante dignissim dictum"),r.a.createElement(y.a,{variant:"subtitle2",color:"primary"},'"Cras non arcu eu tellus molestie tincidunt vitae id purus."'),r.a.createElement("p",null,"Phasellus imperdiet sit amet neque vitae lacinia. Aenean mi arcu, posuere vitae libero vitae, porttitor sollicitudin leo. Vivamus sit amet purus viverra, scelerisque mauris non, dignissim elit. Mauris porta purus eu mattis tempus. Vivamus at condimentum lorem. Vivamus ornare diam nisl, quis consectetur lectus molestie in. Vivamus congue ante at sapien blandit pretium. Pellentesque tincidunt tincidunt dui in ornare. Aenean tempus, massa quis tristique pharetra, massa est interdum tellus, vitae rutrum risus nibh et elit. Cras tempor purus dui, sit amet bibendum justo viverra sit amet."))}var aa=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).goBack=function(){t.props.history.goBack()},t.handleChange=function(e){var a={values:t.state.values};a.values[e.target.id]=e.target.value,t.setState(a)},t.validate=function(){var e={errors:{lastName:!1,firstName:!1,userName:!1,email:!1}},a=!1;return t.state.values.firstName.length<3&&(e.errors.firstName=!0,a=!0),t.state.values.lastName.length<3&&(e.errors.lastName=!0,a=!0),t.state.values.userName.length<3&&(e.errors.userName=!0,a=!0),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t.state.values.email)||(e.errors.email=!0,a=!0),t.setState(e),!a},t.registerUser=function(){if(t.validate()){t.setState({loading:!0});var e={firstName:t.state.values.firstName,lastName:t.state.values.lastName,userName:t.state.values.userName,email:t.state.values.email};Ve.postUser(e).then(function(e){t.setState({dialogState:1})}).catch(function(e){t.setState({dialogState:2})}).finally(function(){t.setState({loading:!1})})}},t.editUser=function(){if(t.validate()){t.setState({loading:!0});var e={id:t.state.user.id,firstName:t.state.values.firstName,lastName:t.state.values.lastName,userName:t.state.values.userName,email:t.state.values.email};Ve.putUser(e).then(function(e){t.setState({dialogState:1})}).catch(function(e){t.setState({dialogState:2})}).finally(function(){t.setState({loading:!1})})}},t.handleDialogClose=function(){t.setState({dialogState:0})},t.handleDialogConfirm=function(){t.setState({dialogState:0}),t.goBack()},t.state={user:null,isNewUser:!0,values:{lastName:"",firstName:"",userName:"",email:""},errors:{lastName:!1,firstName:!1,userName:!1,email:!1},loading:!1,dialogState:0},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;"undefined"!==typeof a&&Ve.getUser(a).then(function(a){var t={user:a,isNewUser:!1,values:{lastName:a.lastName,firstName:a.firstName,userName:a.userName,email:a.email}};e.setState(t)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e,a,t,n,i=this.props.classes,l=this.state.isNewUser,o=this.state.values,s=this.state.errors,c=this.state.dialogState,m=this.state.loading,u=s.firstName?"The first name must have at least three characters.":"",p=s.lastName?"The last name must have at least three characters.":"",d=s.userName?"The username must have at least three characters.":"",g=s.email?"Please, enter a valid e-mail.":"We'll never share your e-mail with anyone else.";return l?(e="New User",a="REGISTER",t=this.registerUser,n="User registered successfully."):(e="Edit User",a="SAVE",t=this.editUser,n="Changes successfully updated."),r.a.createElement($,{returnTo:"/users",title:e},r.a.createElement(v.a,{className:i.wrapper},r.a.createElement(w.a,{container:!0,spacing:3},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(N.a,{className:i.paper},r.a.createElement(w.a,{container:!0,spacing:2},r.a.createElement(x.a,{smDown:!0},r.a.createElement(w.a,{item:!0,xs:12,container:!0,justify:"flex-start",alignItems:"center"},r.a.createElement(F.a,{onClick:this.goBack,edge:"start","aria-label":"Return"},r.a.createElement(S.a,null,"arrow_back")),r.a.createElement(y.a,{variant:"h6",component:"h3"},e))),r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,{id:"lastName",label:"Last Name",value:o.lastName,onChange:this.handleChange,margin:"dense",variant:"outlined",helperText:p,error:s.lastName,fullWidth:!0})),r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,{id:"firstName",label:"First Name",value:o.firstName,onChange:this.handleChange,margin:"dense",variant:"outlined",helperText:u,error:s.firstName,fullWidth:!0})),r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,{id:"userName",label:"Username",value:o.userName,onChange:this.handleChange,margin:"dense",variant:"outlined",helperText:d,error:s.userName,fullWidth:!0})),r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,{id:"email",label:"E-mail",value:o.email,onChange:this.handleChange,margin:"dense",variant:"outlined",helperText:g,error:s.email,fullWidth:!0})),r.a.createElement(w.a,{item:!0,xs:12,justify:"flex-end",container:!0},r.a.createElement(Ie.a,{variant:"contained",color:"secondary",onClick:t},a))))))),r.a.createElement(Te,{open:m}),r.a.createElement(Be,{open:1===c,title:"Success",message:n,handleDialogConfirm:this.handleDialogConfirm}),r.a.createElement(Be,{open:2===c,title:"Error",message:"Something went wrong. Please, try again.",handleDialogConfirm:this.handleDialogClose}))}}]),a}(n.Component),ta=Object(E.g)(Object(b.a)(function(e){return{wrapper:Object(f.a)({padding:e.spacing(3,5,5,5)},e.breakpoints.down("xs"),{padding:e.spacing(3)}),paper:Object(f.a)({padding:e.spacing(3)},e.breakpoints.down("xs"),{backgroundColor:"transparent",boxShadow:"none",padding:e.spacing(0,1,2,1)}),dialogActions:{flexDirection:"row-reverse",justifyContent:"space-between"},loadingDialog:{background:"transparent",boxShadow:"none",overflow:"hidden"}}})(aa)),na=t(48),ra=t(116),ia=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).googleResponse=function(e){t.setState({googleProfileObj:e.profileObj,googleAccessToken:e.accessToken}),t.login()},t.googleFailure=function(e){console.log(e)},t.googleResponse=t.googleResponse.bind(Object(na.a)(t)),t.handleChange=t.handleChange.bind(Object(na.a)(t)),t.handleDialogClose=t.handleDialogClose.bind(Object(na.a)(t)),t.login=t.login.bind(Object(na.a)(t)),t.state={email:"",password:"",googleProfileObj:null,googleAccessToken:null,loading:!1,error:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"login",value:function(){var e=this;this.setState({loading:!0}),He.post("login",{email:this.state.email,password:this.state.password,googleProfileObj:this.state.googleProfileObj,googleAccessToken:this.state.googleAccessToken}).then(function(a){if(201===a.status)e.setState({loading:!1}),t=a.authToken,localStorage.setItem("Bearer",t),e.props.history.push("/");else if(401===a.status)throw new Error("Icorrect e-mail or password.");var t}).catch(function(a){console.log(a),e.setState({loading:!1,error:!0})})}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.id,e.target.value))}},{key:"handleDialogClose",value:function(){this.setState({error:!1})}},{key:"render",value:function(){var e=this.props.classes,a=r.a.createElement(Ue.a,{open:this.state.loading,classes:{paper:e.loadingDialog},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(we.a,{color:"secondary"})),t=r.a.createElement(Ue.a,{open:this.state.error,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(We.a,{id:"alert-dialog-title"},"Error"),r.a.createElement(Me.a,null,r.a.createElement(qe.a,{id:"alert-dialog-description"},"Login failed. Please, try again.")),r.a.createElement(Ae.a,null,r.a.createElement(Ie.a,{onClick:this.handleDialogClose,color:"secondary"},"OK")));return r.a.createElement(w.a,{className:e.height100,container:!0,justify:"center",alignItems:"center"},r.a.createElement(w.a,{item:!0,xl:2,lg:3,md:4,sm:6,xs:12},r.a.createElement(N.a,{className:e.paper},r.a.createElement(w.a,{container:!0,justify:"center",spacing:4},r.a.createElement(w.a,{spacing:2,container:!0,item:!0,xs:12},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(ee.a,{id:"email",label:"E-mail",margin:"dense",variant:"outlined",value:this.state.email,onChange:this.handleChange,fullWidth:!0})),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(ee.a,{id:"password",label:"Password",margin:"dense",variant:"outlined",value:this.state.password,onChange:this.handleChange,fullWidth:!0})),r.a.createElement(w.a,{item:!0,xs:12,className:e.loginButtons},r.a.createElement(Ie.a,{variant:"contained",color:"secondary",onClick:this.login},"SIGNIN"))),r.a.createElement(w.a,{spacing:2,container:!0,item:!0,xs:12},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"caption"},"Or signin with social networks"))),r.a.createElement(w.a,{spacing:2,container:!0,item:!0,xs:12},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(ra.GoogleLogin,{className:e.socialButtons,clientId:"839852421288-2b65201lpgk9bqfssjo0ir45mj1va2vd.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:this.googleResponse,onFailure:this.googleFailure})))))),this.state.loading&&a,this.state.error&&t)}}]),a}(n.Component),la=Object(b.a)(function(e){return{height100:{height:"100%"},paper:Object(f.a)({padding:e.spacing(4),paddingBottom:"40px"},e.breakpoints.down("xs"),{backgroundColor:"transparent",boxShadow:"none"}),loginButtons:{display:"flex",justifyContent:"flex-end"},socialButtons:{width:"100%",justifyItems:"center"},loadingDialog:{background:"transparent",boxShadow:"none",overflow:"hidden"}}})(ia),oa=function(e){return r.a.createElement(C.a,null,r.a.createElement(E.d,null,r.a.createElement(sa,{exact:!0,path:"/",component:Q}),r.a.createElement(sa,{exact:!0,path:"/users",component:Ye}),r.a.createElement(sa,{path:"/nestedroutes",component:Xe}),r.a.createElement(sa,{path:"/users/single/:id",component:ta}),r.a.createElement(sa,{path:"/users/single",component:ta}),r.a.createElement(E.b,{exact:!0,path:"/login",component:la})))};function sa(e){var a=e.component,t=Object(h.a)(e,["component"]);return r.a.createElement(E.b,Object.assign({},t,{render:function(e){return B()?r.a.createElement(a,e):r.a.createElement(E.a,{component:la,to:{pathname:"/login",state:{from:e.location}}})}}))}var ca=t(55),ma=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_NAV_DRAWER":return!0;case"CLOSE_NAV_DRAWER":return!1;case"GET_NAV_DRAWER":default:return e}},ua=Object(ca.b)({navDrawerReducer:ma}),pa=Object(d.a)({palette:{secondary:{main:"#E91E63"},primary:{main:"#282E3D"}}}),da=Object(ca.c)(ua),ga=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(Y.a,{store:da},r.a.createElement(p.a,{theme:pa},r.a.createElement(g.a,null),r.a.createElement(oa,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ga,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.e3ac4029.chunk.js.map