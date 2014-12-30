﻿lido_environment.workflow.push((function(){
	'use strict';
	

	var my = {};
	my.parent = lido_environment;
	var bundle;

	my.element_id_prefix = "actor_";
	
	my.identity = {
		id: "object_relation",
		title: "Object Relation",
		icon: "network"
	};
	
	my.module_view;
	
	my.init = function(view){
	
		dom.h1(view, "Object Relation");
		dom.br(view);
		
		APP.forms.make(view, my.parent.object_relation_form, "object_", "object_", undefined);
		
	};
	
	
	my.getSaveData = function(){
	
		return;
	
	};
	
	
	my.recall = function(data){
	
		return;
		
	};
	
	
	my.functions = function(){
		return [];
	};


	return my;
	
})());