/*
This is empty on purpose! Your code to build the resume will go here.
 */

var projects = {
	projects:[{
			title: "SGA",
			dates: "2013 - Present",
			description: "We developed a Java Web Application that allowed Instituto Crandon to perform processes in a coordinated manner assisted by our system. After the project ended we continue to provide maintenance for the software.",
			images: []
		},
		{
			title: "Cotizador Logístico",
			dates: "May 2015 - Present",
			description: "Still under NDA",
			images: ["images/cotizador.png"]
		}],
		display : function() {
			var htmlProjects = $("#projects");
			for(project in projects.projects)
			{
				htmlProjects.append(HTMLprojectStart);
				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(formattedTitle);
				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);
				if(projects.projects[project].images.length>0)
				{
					var images = projects.projects[project].images;
					for(image in images)
					{
						var formattedImage = HTMLprojectImage.replace("%data%", images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}
			}
		}
};

var education = {
	schools: [{
		name: "Universidad Católica del Uruguay",
		location: "Montevideo, Uruguay",
		degree: "Ingeniero en Informática",
		majors: "Computer Science",
		dates: "2013",
		url: "www.ucu.edu.uy"
	}],
	onlineCourses: [{
			title: "Web Application Architectures",
			school: "Coursera",
			date: "2014",
			url: "https://www.coursera.org/signature/certificate/J6E7Z3B69V"
	}],
	display : function() {
		var htmlEducation = $("#education");
		for(school in education.schools)
		{
			htmlEducation.append(HTMLschoolStart);
			var formattedSchoolName=HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			$(".education-entry:last").append(formattedSchoolName);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
		}
		htmlEducation.append(HTMLonlineClasses);
		for(onlineCourse in education.onlineCourses)
		{
			htmlEducation.append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			$(".education-entry:last").append(formattedTitle);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedSchool);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			$(".education-entry:last").append(formattedDate);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace("#", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedUrl);
		}
	}
}

var work = {
	jobs: [{
			employer: "Lithium Software",
			title: "Software Engineer - Java Developer",
			location: "Montevideo, Uruguay",
			dates: "Oct, 2013 - Present",
			description: "I work at Lithium Software (http://www.lithium.com.uy/) as a java specialist outsourced for Pyxis (http://pyxis.com.uy/). I work as part of a team working in different projects in Uruguay’s Postal Service (El Correo Uruguayo). Our development toolset includes: Java EE, Wicket, Swing and Bootstrap, PostgreSQL, MSSQLServer and Oracle."
		},
		{
			employer: "Universidad Católica del Uruguay",
			title: "Assistant Professor Grade A1",
			location: "Montevideo, Uruguay",
			dates: "Mar, 2014 - Present",
			description: "I work as an assistant, preparing coursework, correcting students work, class support, and lecturing (when needed) in 4 different subjects. \nData Structures and Algorithms using java as reference language and	Team Based Learning as teaching methodology.\nObject Oriented Programming using C# as reference language.\nArtificial Intelligence using Team Based Learning. The subject teaches the basic concepts of artificial intelligence, its methods, meaning, limits and applications. Uses python as reference language.\nFunctional Programming also using Team Based Learning. The subject teaches the paradigm of functional programming using Haskell as reference language."
		},
		{
			employer: "Myself",
			title: "Freelance developer",
			location: "Montevideo, Uruguay",
			dates: "2008 - Present",
			description: "I develop websites mainly using PHP, MySQL, HTML, AngularJS and CSS. Other work includes a project of an Academic Management System for Instituto Crandon developed in Java."
		},
		{
			employer: "Universidad Católica del Uruguay",
			title: "Honorary Teaching Assistant in Data Structures and Algorithms",
			location: "Montevideo, Uruguay",
			dates: "Mar, 2013 - Dec, 2013",
			description: "I provided assistance in class preparation and during class. Participated in the evaluation of students’ work under direct supervision of the professors."
		},
		{
			employer: "Fundacion Veritas",
			title: "Intern in Career Service of Universidad Católica del Uruguay",
			location: "Montevideo, Uruguay",
			dates: "Jun, 2009 - Sep, 2009",
			description: "Worked with a new tool using the “Portal Laboral UCU”: http://insercionlaboral.ucu.edu.uy. Participated in the organization of the “Expo – Feria Laboral UCU” (Expo – Job Fair UCU), made a new bulletin, assisted in administrative tasks, promotion, design and marketing."
		}],
	display : function() {
		var workExperience = $("#workExperience");
		for(job in work.jobs)
		{
			workExperience.append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
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
	biopic : "images/fry.jpg",
	display : function()
	{
		var header = $("#header");
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);

		header.prepend(formattedRole);
		header.prepend(formattedName);
		header.append(HTMLbioPic.replace("%data%", bio.biopic));
		var topContacts = $("#topContacts");
		topContacts.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		topContacts.append(HTMLemail.replace("%data%", bio.contacts.email));
		topContacts.append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		topContacts.append(HTMLgithub.replace("%data%", bio.contacts.github));
		if(bio.skills!=undefined && bio.skills.length>0)
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