Vue.component('data-table', {
	props:['tabledata'],
	template:`
		<div class="container">
			<b-button v-b-toggle.collapse-1 variant="primary">Toggle Table</b-button>
			<b-collapse visible id="collapse-1">
	  	  <b-card>
					<table class="table table-bordered table-striped">
						<thead>
							<th v-for="column in tabledata.columns">{{column}}</th>
						</thead>
						<tbody>
							<tr v-for="row in tabledata.values">
								<td v-for="(value, name, index) in tabledata.columns">{{row[name]}}</td>
							</tr>
						</tbody>
					</table>
		    </b-card>
		  </b-collapse>
		</div>
	`
});

var app = new Vue({
  el: '#app',
  data:{
  	myData : {
			columns:{
				number:'Card number',
				name:'Card user name',
				info1:'Card Information 1',
				info2:'Card Information 2',
				accessLevel:'Access level'
			},
			values:[{
				number:'01:00001',
				name:'Nilesh Saraf',
				info1:'fob',
				info2:'',
				accessLevel:'None'
			},{
				number:'01:00002',
				name:'Andrew Lumb',
				info1:'Andrew Lumb',
				info2:'',
				accessLevel:'Executive - Always valid, all doors'
			}]
		}
  }
});