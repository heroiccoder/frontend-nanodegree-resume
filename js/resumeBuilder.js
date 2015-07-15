/*
This is empty on purpose! Your code to build the resume will go here.
 */

var projects = {
	projects:[{
			title: "SGA",
			dates: "2013 - Present",
			description: "-",
			images: []
		}],
		display : function() {}
};

var education = {
	schools: [{
		name: "Universidad Católica del Uruguay",
		location: "Montevideo, Uruguay",
		degree: "Ingeniero en Informática",
		majors: "Computer Science",
		dates: "2013",
		url: "www.ucu.edu.uy"
		},{
		onlineCourses: []
		}],
		display : function() {}
}

var work = {
	jobs: [{
		employer: "Lithium Software",
		title: "Software Engineer - Java Developer",
		location: "Montevideo, Uruguay",
		dates: "Oct, 2013-Present",
		description: "Later"
		}],
	display : function() {}
}

var bio = {
	name : "Gonzalo Martínez",
	role : "Software Engineer",
	contacts : {
		mobile : "+59894864714",
		email : "gonzaloucu@gmail.com",
		github : "heroiccoder",
		twitter : "gmartinezbas",
		location : "Barros Blancos, Uruguay"
	},
	welcomeMessage : "This is my Resume",
	skills : ["Javascript", "Java", "PHP", "Python", "CSS", "Git", "Wicket", "Angular", "SQL/MySQL/SQLServer/PostgreSQL/Oracle"],
	biopic : "url"
}

var header = $("#header");
header.prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
var topContacts = $("#topContacts");
topContacts.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
topContacts.append(HTMLemail.replace("%data%", bio.contacts.email));
topContacts.append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
topContacts.append(HTMLgithub.replace("%data%", bio.contacts.github));


