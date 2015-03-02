// Bio JSON

var bio = {
	"name" : "Nick Ludlow",
	"role" : "Front-End Web Developer",
	"contacts" : {
		"mobile" : "(+44)07759584179",
		"email" : "nickludlow82@gmail.com",
		"github" : "luddles82",
		"twitter" : "@nick_ludlow",
		"location" : "London, UK"
	},
	"welcomeMessage" : "Hello and welcome to my world!",
	"skills" : ["Happiness", "HTML", "CSS", "JS/jQuery", "Attention to detail", "Clear Communication", "Team Player"],
	"bioPic" : "images/me.jpg"
};

//education JSON

var education = {
	"schools" : [
		{
		"name" : "University of Bristol",
		"location" : "Bristol, UK",
		"degree" : "BA",
		"major" : "History",
		"dates" : "2003",
		"url" : "http://www.bristol.ac.uk/"
		}
	],
	"OnLineCourses": [
	 {
	 "title": "Front End Web Design Nanodegree",
	 "school": "Udacity",
	 "dates": "2015",
	 "url": "http://www.udacity.com"
	 },
	 {
	 "title": "Intro to HTML & CSS",
	 "school": "Udacity",
	 "dates": "2015",
	 "url": "http://www.udacity.com"
	 },
	 {
	 "title": "Version Control",
	 "school": "Udacity",
	 "dates": "2015",
	 "url": "http://www.udacity.com"
	 },
	 {
	 "title": "JavaScript Basics / Intro to jQuery",
	 "school":"Udacity",
	 "dates": "2015",
	 "url": "http://www.udacity.com"
	 },
	 {
	 "title": "JavaScript Levels 1 & 2",
	 "school":"Code Avengers",
	 "dates": "2014",
	 "url": "http://www.codeavengers.com"
	 },
	 {
	 "title": "HTML & CSS Levels 1,2 & 3",
	 "school":"Code Avengers",
	 "dates": "2014",
	 "url": "http://www.codeavengers.com"
	 },
	 {
	 "title": "JavaScript",
	 "school":"Code Academy",
	 "dates": "2013",
	 "url": "http://www.codeacademy.com"
	 }
	 ]
};

//work JSON

var work = {
	"jobs" : [
		{
			"employer" : "Various Clients",
			"title" : "Freelance Front-end Web Developer",
			"dates" : "2012 - Present",
			"description" : "I have worked with clients do design an build sites which meet their needs and are enjoyable but functional for users."
		    },
		{
			"employer" : "BBC",
			"title" : "Multi-skilled Technical Operator",
			"dates" : "2007 - Present",
			"description" : "Working in live news TV I rack and operate cameras, mix sound and vision and direct programmes and segements. I also program news playout systems and create and upload online news content."
		    }
	]
};

//projects JSON

var projects = {
	"projects" : [
		{
			"title" : "Izzy Charman",
			"dates" : "2012 - Present",
			"description" : "Portfolio website created for TV and film producer Izzy Charman.",
			"images" : ["images/ICimage.jpg"]
		},
		{
			"title" : "Canadian Indoor Classic",
			"dates" : "2013 - Present",
			"description" : "Tournament website for the CIC. Created by me and developed with the organisational committe of the event.",
			"images" : ["images/CICimage.jpg"]
		}
	]
}

//display bio JSON info

bio.display = function() {

		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedName = HTMLheaderName.replace("%data%",bio.name);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);


		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		//Display footer contacts
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#footerContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#footerContacts").append(formattedLocation);


		var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
		$("#header").append(formattedImage);

		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		if (bio.skills.length > 0) {
			$("#header:last").append(HTMLskillsStart);
			for (skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
				$("#header:last").append(formattedSkill);

			}
		}
}
bio.display();



//display work JSON info

work.display = function() {
	for (job in work.jobs) {
		//create new div for work experience
		$("#workExperience").append(HTMLworkStart);

		//concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();



function inName(firstLastName) {
	var nameArray = firstLastName.trim().split(" ");
	var firstname = nameArray[0];
	var lastname = nameArray[1];


	firstname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
	lastname = lastname.toUpperCase();

	return firstname + " " + lastname;
}

//display projects JSON info

projects.display = function() {
	for (project in projects.projects) {
		//create new div for work experience
		$("#projects").append(HTMLprojectStart);

		//concat employer and title
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		//check image number
		if (projects.projects[project].images.length > 0) {
			for (image in  projects.projects[project].images) {
				var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImages);
			}
		};
	}
}
projects.display();


//display education JSON info

education.display = function() {
 for (school in education.schools) {
  $("#education").append(HTMLschoolStart);
  var SchName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchName = SchName.replace("#", education.schools[school].url);
  $(".education-entry:last").append(formattedSchName);
  var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchLoc);
  var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchDates);
  var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  $(".education-entry:last").append(formattedSchDeg);
  var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].major);
  $(".education-entry:last").append(formattedSchMaj);
 }

 $(".education-entry:last").append(HTMLonlineClasses);
 for (OnLine in education.OnLineCourses) {
  var OLTitle = HTMLonlineTitle.replace("%data%", education.OnLineCourses[OnLine].title);
  var formattedOLTitle = OLTitle.replace("#", education.OnLineCourses[OnLine].url);
  $(".education-entry:last").append(formattedOLTitle);
  var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.OnLineCourses[OnLine].school);
  $(".education-entry:last").append(formattedOLSchool);
  var formattedOLDates = HTMLonlineDates.replace("%data%", education.OnLineCourses[OnLine].dates);
  $(".education-entry:last").append(formattedOLDates);
}
}
education.display();

//Google Map API 

$("#mapDiv").append(googleMap);
