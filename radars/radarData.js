//This is the title for your window tab, and your Radar
document.title = "Alt Tech Radar (May 2015)";

//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r': 100, 'name': 'Adopt'}
                  ,{'r': 200, 'name': 'Trial'}
                  ,{'r': 300, 'name': 'Assess'}
                  ,{'r': 400, 'name': 'Hold'}
//                ,{'r': 500, 'name': 'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
{'name': 'Code Reviews', pc: {r: 80, t: 110}, movement: 'c'},
{'name': 'Mathematics', pc: {r: 50, t: 110}, movement: 'c'},
{'name': 'Property based testing', pc: {r: 70, t: 165}, movement: 'c'},
{'name':'Scrum', pc:{r: 180, t: 130}, movement: 'c'},
{'name':'Pair Programming', pc:{r: 280, t: 130}, movement: 'c'},
{'name':'Dependency Injection', pc:{r: 380, t: 130}, movement: 'c'},
        ]
    },

    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
{ name: 'Docker',    pc: { r: 90,  t: 19 }, movement: 'c' },
{ name: 'Nix',       pc: { r: 210, t: 19 }, movement: 'c' },
{ name: 'Kafka',     pc: { r: 120, t: 19 }, movement: 'c' },
{ name: 'Git',       pc: { r: 10,  t: 73 }, movement: 'c' },
{ name: 'Hibernate', pc: { r: 380, t: 56 }, movement: 'c' },
{ name: 'MongoDB',   pc: { r: 350, t: 5  }, movement: 'c' },
{ name: 'Ansible',   pc: { r: 250, t: 74 }, movement: 'c' },
{ name: 'Chef',      pc: { r: 280, t: 74 }, movement: 'c' },
{ name: 'Puppet',    pc: { r: 270, t: 74 }, movement: 'c' }
  ]
    },
    { "quadrant": "Platforms",
        "left" : 45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
{name: 'JVM',           pc: {r: 50,  t: 265}, movement: 'c'},
{name: 'AWS',           pc: {r: 70,  t: 265}, movement: 'c'},
{name: 'Ubuntu',        pc: {r: 90,  t: 195}, movement: 'c'},
{name: 'NixOS',         pc: {r: 180, t: 195}, movement: 'c'},
{name: 'OpenStack',     pc: {r: 250, t: 265}, movement: 'c'},
{name: 'Ruby On Rails', pc: {r: 390, t: 215}, movement: 'c'},
{name: 'Java EE',       pc: {r: 390, t: 245}, movement: 'c'},
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
{name: 'Scala',  pc: {r: 70,  t: 320}, movement: 'c'},
{name: 'Haskell', pc: {r: 20, t: 320}, movement: 'c'},
{name: 'Coq', pc: {r: 280, t: 320}, movement: 'c'},
{name: 'Agda', pc: {r: 290, t: 320}, movement: 'c'},
{name: 'Idris', pc: {r: 250, t: 320}, movement: 'c'},
{name: 'PureScript', pc: {r: 150, t: 320}, movement: 'c'},
{name: 'TypeScript', pc: {r: 180, t: 320}, movement: 'c'},
{name: 'Java 8', pc: {r: 330, t: 355}, movement: 'c'},
{name: 'Spring', pc: {r: 380, t: 330}, movement: 'c'},
{name: 'Ruby', pc: {r: 350, t: 330}, movement: 'c'},
{name: 'Python', pc: {r: 330, t: 330}, movement: 'c'},
{name: 'PHP', pc: {r: 340, t: 330}, movement: 'c'},
{name: 'Ruby on Rails', pc: {r: 370, t: 330}, movement: 'c'}
        ]
    }
];
