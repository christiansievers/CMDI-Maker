﻿/*
Copyright 2014 Sebastian Zimmer

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


var imdi_environment = (function(){

	var my = {
		name: "imdi",
		id: "imdi",
		title: "IMDI",
		workflow: [],
		settings: [
			{
				title: "Output Format",
				id: "output_format_select",
				type: "empty"
			},
			{
				
				title: "Calculate Actor's Age",
				description: "When this feature is activated, CMDI Maker checks if the age of an actor (if it has not been specified already) "+
					"can be calculated from the actor's birth date and the session date.<br>"+
					"When an age can be calculated, it will appear in the output file.<br>"+
					"(Age = Session Date - Actor's Birth Date)",
				type: "switch",
				default_value: true,
				name: "radio_age_calc",
				id: "radio_age_calc"
			},
			{
				title: "Export Actors as JSON",
				onclick: function (){my.workflow[2].export_actors();},
				type: "link"
			},
			{
				title: "Import Actors from JSON or IMDI",
				description: "Please import UTF-8 encoded files only!",
				type: "file",
				file_input_id: "actors_file_input",
				file_input_name: "actors_file_input",
				onchange: function () {my.workflow[2].import_actors();}
			},
			{
				title: "Delete Actors Database",
				description: "CMDI Maker saves all your actors in a Web Storage browser database, so that they are kept, even if you close the browser window.",
				type: "link",
				onclick: function (){my.workflow[2].erase_database();}
			}
		],
		recall: function (settings){
		
			dom.setRadioIndex(document.getElementsByName("output_format"), settings.output_format);
			dom.setOnOffSwitchValue(g("radio_age_calc"),settings.calc_actors_age);
		
		},
		getSaveData: function(){
		
			var object = {};

			object.output_format = dom.getValueOfRadios("output_format");
			object.calc_actors_age = g("radio_age_calc").on;
		
			return object;
		
		},
		specialInput: function(field, parent, element_id_prefix, element_class_prefix){
		
			if (field.name == "actors"){
			
				dom.newElement("br","","",parent);
				
				dom.newElement("div",element_id_prefix+"actors", "actors", parent);
				dom.newElement("div",element_id_prefix+"addActors_div", "actors", parent);
			
			}
			
			if (field.name == "resources"){
			
				dom.newElement("div",element_id_prefix+"resources", "mfs", parent);
				dom.newElement("div",element_id_prefix+"add_mf_div", "", parent);
			
			}
			
			if (field.name == "actor_languages"){
			
				var p = dom.newElement("p","", "", parent);
				var input = dom.newElement("input","actor_language_select","",p);
				input.type = "text";
				input.size = 1;
				input.name = "actor_language_select";
				
				dom.newElement("span","","",p," ");

				var input = dom.newElement("input","actor_language_search_button","",p);
				input.type = "button";
				input.value = "Search";

				dom.newElement("br","","",p);
				dom.newElement("span","","",p,"or type in ISO code ");
				
				var input = dom.newElement("input","actor_language_iso_input","",p);
				input.type = "text";
				input.size = 1;
				input.name = "actor_language_iso_input";
				
				dom.newElement("span","","",p," ");
				
				var input = dom.newElement("input","actor_language_iso_ok","",p);
				input.type = "button";
				input.value = "OK";			
				
				dom.newElement("div","current_actor_languages_display", "", parent);									
				
			}
		
		},
		reset: function(){
		
			g("corpus_name").value = "";
			g("corpus_title").value = "";
			g("corpus_description").value = "";
			
			my.workflow[3].eraseAll();
			my.workflow[0].content_languages.removeAll();
		
		}
	};
	
	return my;
	
})();