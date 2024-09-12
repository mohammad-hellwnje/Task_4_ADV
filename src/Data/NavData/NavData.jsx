export const navItems = [
    { type: 'link', href: "#home", label: "HOME" },
    { type: 'link', href: "#about", label: "ABOUT" },
    { type: 'link', href: "#service", label: "SERVICE" },
    { type: 'link', href: "#departments", label: "DEPARTMENTS" },
    { type: 'link', href: "#doctors", label: "DOCTORS" },
    {
      type: 'dropdown',
      title: 'DROPDOWN',
      dropdownItems: [
        { href: "#action3", label: "Action" },
        { href: "#action4", label: "Another action" },
        { href: "#action5", label: "Something else here" },
      ]
    }
  ];
  
  export const topBarInfo = {
    days: "Monday - Saturday",
    hours: "8AM to 10PM",
    contact: "Call us now +1 5589 55488 55"
  };
  