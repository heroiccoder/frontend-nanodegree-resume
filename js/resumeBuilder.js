'use strict';

var projects = {
	"projects":[{
			"title": "SGA",
			"dates": "2013 - Present",
			"description": "We developed a Java Web Application that allowed Instituto Crandon to perform processes in a coordinated manner assisted by our system. After the project ended we continue to provide maintenance for the software.",
			"images": []
		},
		{
			"title": "Cotizador Logístico",
			"dates": "May 2015 - Present",
			"description": "Still under NDA",
			"images": ["images/cotizador.png"]
		}],
		"display" : function() {
			var htmlProjects = $("#projects");
			for(var project=0; project<projects.projects.length; project++)
			{
				htmlProjects.append(HTMLprojectStart);
				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				var lastProjectEntry =$(".project-entry:last");
				lastProjectEntry.append(formattedTitle,formattedDates,formattedDescription);
				if(projects.projects[project].images.length>0)
				{
					var images = projects.projects[project].images;
					for(var image=0; image < images.length; image++)
					{
						var formattedImage = HTMLprojectImage.replace("%data%", images[image]);
						lastProjectEntry.append(formattedImage);
					}
				}
			}
		}
};

var education = {
	"schools": [{
		"name": "Universidad Católica del Uruguay",
		"location": "Montevideo, Uruguay",
		"degree": "Ingeniero en Informática",
		"majors": "Computer Science",
		"dates": "2013",
		"url": "www.ucu.edu.uy"
	}],
	"onlineCourses": [{
			"title": "Web Application Architectures",
			"school": "Coursera",
			"date": "2014",
			"url": "https://www.coursera.org/signature/certificate/J6E7Z3B69V"
	}],
	"display" : function() {
		var htmlEducation = $("#education");
		for(var school=0; school<education.schools.length; school++)
		{
			htmlEducation.append(HTMLschoolStart);
			var formattedSchoolName=HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);

			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolName,formattedDegree,formattedDates,formattedLocation,formattedMajor);
		}
		htmlEducation.append(HTMLonlineClasses);
		for(var onlineCourse=0; onlineCourse<education.onlineCourses.length; onlineCourse++)
		{
			htmlEducation.append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace("#", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedTitle,formattedSchool,formattedDate,formattedUrl);
		}
	}
}

var work = {
	"jobs": [{
			"employer": "Lithium Software",
			"title": "Software Engineer - Java Developer",
			"location": "Montevideo, Uruguay",
			"dates": "Oct, 2013 - Present",
			"description": "I work at Lithium Software (http://www.lithium.com.uy/) as a java specialist outsourced for Pyxis (http://pyxis.com.uy/). I work as part of a team working in different projects in Uruguay’s Postal Service (El Correo Uruguayo). Our development toolset includes: Java EE, Wicket, Swing and Bootstrap, PostgreSQL, MSSQLServer and Oracle."
		},
		{
			"employer": "Universidad Católica del Uruguay",
			"title": "Assistant Professor Grade A1",
			"location": "Montevideo, Uruguay",
			"dates": "Mar, 2014 - Present",
			"description": "I work as an assistant, preparing coursework, correcting students work, class support, and lecturing (when needed) in 4 different subjects. \nData Structures and Algorithms using java as reference language and	Team Based Learning as teaching methodology.\nObject Oriented Programming using C# as reference language.\nArtificial Intelligence using Team Based Learning. The subject teaches the basic concepts of artificial intelligence, its methods, meaning, limits and applications. Uses python as reference language.\nFunctional Programming also using Team Based Learning. The subject teaches the paradigm of functional programming using Haskell as reference language."
		},
		{
			"employer": "Myself",
			"title": "Freelance developer",
			"location": "Montevideo, Uruguay",
			"dates": "2008 - Present",
			"description": "I develop websites mainly using PHP, MySQL, HTML, AngularJS and CSS. Other work includes a project of an Academic Management System for Instituto Crandon developed in Java."
		},
		{
			"employer": "Universidad Católica del Uruguay",
			"title": "Honorary Teaching Assistant in Data Structures and Algorithms",
			"location": "Montevideo, Uruguay",
			"dates": "Mar, 2013 - Dec, 2013",
			"description": "I provided assistance in class preparation and during class. Participated in the evaluation of students’ work under direct supervision of the professors."
		},
		{
			"employer": "Fundacion Veritas",
			"title": "Intern in Career Service of Universidad Católica del Uruguay",
			"location": "Montevideo, Uruguay",
			"dates": "Jun, 2009 - Sep, 2009",
			"description": "Worked with a new tool using the “Portal Laboral UCU”: http://insercionlaboral.ucu.edu.uy. Participated in the organization of the “Expo – Feria Laboral UCU” (Expo – Job Fair UCU), made a new bulletin, assisted in administrative tasks, promotion, design and marketing."
		}],
	"display" : function() {
		var workExperience = $("#workExperience");
		for(var job=0; job<work.jobs.length; job++)
		{
			workExperience.append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedEmployerTitle,formattedDates,formattedDescription);
		}
	}
}

var bio = {
	"name" : "Gonzalo Martínez",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile" : "+59894864714",
		"email" : "gonzaloucu@gmail.com",
		"github" : "heroiccoder",
		"twitter" : "gmartinezbas",
		"location" : "Barros Blancos, Uruguay"
	},
	"welcomeMessage" : "This is my Resume",
	"skills" : ["Javascript", "Java", "PHP", "Python", "CSS", "Git", "Wicket", "Angular", "SQL/MySQL/SQLServer/PostgreSQL/Oracle"],
	"biopic" : "images/fry.jpg",
	"display" : function()
	{
		var header = $("#header");
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);

		header.prepend(formattedRole);
		header.prepend(formattedName);
		header.append(HTMLbioPic.replace("%data%", bio.biopic));
		var contacts = $("#topContacts, #footerContacts");
		contacts.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		contacts.append(HTMLemail.replace("%data%", bio.contacts.email));
		contacts.append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		contacts.append(HTMLgithub.replace("%data%", bio.contacts.github));
		if(bio.skills.length)
		{
			header.append(HTMLskillsStart);
			var skills = $("#skills");
			for(var i =0; i < bio.skills.length; i++)
			{
				skills.append(HTMLskills.replace("%data%", bio.skills[i]));
			}
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

function inName(name)
{
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}

$("#main").append(internationalizeButton);

$("#map-div").append(googleMap);