(this.webpackJsonphealth=this.webpackJsonphealth||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){e.exports=t.p+"static/media/logo.0c220a6b.png"},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),s=t(3),r=t.n(s),n=(t(14),t(1)),d=t.n(n),m=t(4),o=t(5),i=t(6),h=t(7),E=t(8),b=(t(16),t(17),function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(o.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={loading:!0,update_date_time:null,local_new_cases:null,local_total_cases:null,local_total_number_of_individuals_in_hospitals:null,local_deaths:null,local_new_deaths:null,local_recovered:null,global_new_cases:null,global_total_cases:null,global_deaths:null,global_new_deaths:null,global_recovered:null},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://hpb.health.gov.lk/api/get-current-statistical",e.next=3,fetch("https://hpb.health.gov.lk/api/get-current-statistical");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,this.setState({update_date_time:t.data.update_date_time,local_new_cases:t.data.local_new_cases,local_total_cases:t.data.local_total_cases,local_total_number_of_individuals_in_hospitals:t.data.local_total_number_of_individuals_in_hospitals,local_deaths:t.data.local_deaths,local_new_deaths:t.data.local_new_deaths,local_recovered:t.data.local_recovered,global_new_cases:t.data.global_new_cases,global_total_cases:t.data.global_total_cases,global_deaths:t.data.global_deaths,global_new_deaths:t.data.global_new_deaths,global_recovered:t.data.global_recovered,loading:!1}),console.log(t);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",null,this.state.loading||!this.state.update_date_time?c.a.createElement("div",null,"Loading...."):c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-top"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("a",{className:"navbar-brand",href:"https://milindaranawaka.github.io/Covid-19-Sri-Lanka-and-Global-Tracker/"},"Covid-19 Sri Lanka and Global Tracker")))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h3",null,"Sri Lanka"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card text-white bg-primary"},c.a.createElement("h5",{className:"card-header"},"New Cases"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.local_new_cases)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null)),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card text-white bg-warning"},c.a.createElement("h5",{className:"card-header"},"Total Cases"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.local_total_cases)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null)),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card text-white bg-danger"},c.a.createElement("h5",{className:"card-header"},"Deaths"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.local_deaths)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card text-white bg-success"},c.a.createElement("h5",{className:"card-header"},"Recovered"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.local_recovered)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null)),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card text-white bg-danger"},c.a.createElement("h5",{className:"card-header"},"New Deaths"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.local_new_deaths)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null)),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card text-white bg-info"},c.a.createElement("h5",{className:"card-header"},"Suspicious Patients in Hospitals"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.local_total_number_of_individuals_in_hospitals)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h3",null,"Global"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card text-white bg-primary"},c.a.createElement("h5",{className:"card-header"},"New Cases"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.global_new_cases)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null)),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card text-white bg-warning"},c.a.createElement("h5",{className:"card-header"},"Total Cases"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.global_total_cases)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null)),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card text-white bg-danger"},c.a.createElement("h5",{className:"card-header"},"Deaths"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.global_deaths)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card text-white bg-success"},c.a.createElement("h5",{className:"card-header"},"Recovered"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.global_recovered)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null)),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card text-white bg-danger"},c.a.createElement("h5",{className:"card-header"},"New Deaths"),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},this.state.global_new_deaths)),c.a.createElement("div",{className:"card-footer"},"Last updated ",this.state.update_date_time)),c.a.createElement("br",null))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-bottom"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("p",{className:"navbar-brand",style:{"text-align":"center;"}}," Made with \u2764\ufe0f by ",c.a.createElement("a",{className:"navbar-brand",href:"https://www.linkedin.com/in/milinda-ranawaka-5303a5185/"},"Milinda Ranawaka ")," | Powered By HEALTH PROMOTION BUREAU: ",c.a.createElement("a",{className:"navbar-brand",href:"https://hpb.health.gov.lk/en/api-documentation"},"https://hpb.health.gov.lk/en/api-documentation")," "))))))}}]),t}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.420522ba.chunk.js.map