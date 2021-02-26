export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    },
    {
      title: "Dashboard",
      htmlBefore: '<i class="material-icons">network_check</i>',
      to: "/dashboard",
    },
    {
      title: "Integration",
      htmlBefore: '<i class="material-icons">wb_shade</i>',
      htmlAfter: '<i class="material-icons" style="margin-left:10px; font-size: 10px">stop_circle</i>',
      to: "/integration",
    },
    {
      title: "Verification",
      htmlBefore: '<i class="material-icons">domain_verification</i>',
      to: "/verification",
    }
  ];
}
