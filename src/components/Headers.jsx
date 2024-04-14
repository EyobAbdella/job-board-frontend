import CustomHeader from "./CustomHeader";

const Header = () => {
  const url = ["/Jobs", "/Companies", "/Employee"];
  const tabs = [
    "Jobs",
    "Companies",
    "Employees",
    "Resume builder",
    "Reporter Jobs",
  ];
  return (
    <CustomHeader
      headerType={"Header"}
      tabs={tabs}
      searchPlaceholder='Search Jobs'
      url={url}
    />
  );
};

export default Header;

export const EmployeeHeader = () => {
  const url = ["/Find-jobs", "/Companies", "/reporter-jobs"];
  const tabs = ["Find Jobs", "Companies", "Reporter Jobs"];
  return <CustomHeader tabs={tabs} searchPlaceholder='Search Jobs' url={url} />;
};

export const CompanyHeader = () => {
  const url = ["/Post", "/Candidate"];
  const tabs = ["Post Jobs", "Find candidate", "Manage Jobs"];
  return (
    <CustomHeader tabs={tabs} searchPlaceholder='Search skill' url={url} />
  );
};
