import { OfficeBuildingIcon } from "@heroicons/react/outline";

import ArrowDropDown from "@/components/arrow-drop-down/Arrow-drop-down";
import { InputField } from "@/components/input-field/Input-field";
import { Button } from "@/components/button/Button";
import { Avatar, AvatarType } from "@/components/avatar/Avatar";
import { NavItem } from "@/components/nav-item/Nav-item";
import { NavLink, NavStack } from "@/components/nav-stack/Nav-stack";
import { Navigation } from "@/components/navigation/Navigation";
import { Search } from "@/components/search/Search";
// home page

export const testNavItems: NavLink[] = [
  { label: "Dashboard 1", to: "/dashboard-1", isActive: false },
  { label: "Dashboard 2", to: "/dashboard-2", isActive: true },
  { label: "Dashboard 3", to: "/dashboard-3", isActive: false },
];

export const avatarPropsRest = {
  src: "./icons/test_avatar.jpeg",
  initials: "TW",
  icon: <OfficeBuildingIcon />,
};

export const Home = () => {
  return (
    <div style={{ padding: 10 }}>
      <p>Navigation</p>
      <hr />
      <NavItem label="Login" to="/login" />
      <NavItem label="Login" to="/login" isActive />
      <hr />
      <NavStack links={testNavItems} />
      <hr />
      <Navigation isLoggedIn={true} />
      <hr />
      <Navigation />
      <hr />
      <div style={{ background: "#F2F2F2" }}>
        <Navigation isLoggedIn={true} />
      </div>
      <hr />
      <div style={{ background: "#F2F2F2" }}>
        <Navigation />
      </div>
      <hr />

      <p>Search</p>
      <Search />

      <p>Statuses</p>
      <div style={{ display: "flex", gap: 16 }}>
        <Avatar type={AvatarType.photo} size="medium" {...avatarPropsRest} />
        <Avatar
          type={AvatarType.photo}
          size="medium"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.photo}
          size="medium"
          showStatus={true}
          status="busy"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.photo}
          size="medium"
          showStatus={true}
          status="offline"
          {...avatarPropsRest}
        />
      </div>

      <p>Types & Sizes</p>
      <div style={{ display: "flex", gap: 16, margin: "8px 0px" }}>
        <Avatar
          type={AvatarType.photo}
          size="xs"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.placeholder}
          size="xs"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.initials}
          size="xs"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.icon}
          size="xs"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
      </div>
      <div style={{ display: "flex", gap: 16, margin: "8px 0px" }}>
        <Avatar
          type={AvatarType.photo}
          size="small"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.placeholder}
          size="small"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.initials}
          size="small"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.icon}
          size="small"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
      </div>
      <div style={{ display: "flex", gap: 16, margin: "8px 0px" }}>
        <Avatar
          type={AvatarType.photo}
          size="medium"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.placeholder}
          size="medium"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.initials}
          size="medium"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.icon}
          size="medium"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
      </div>
      <div style={{ display: "flex", gap: 16, margin: "8px 0px" }}>
        <Avatar
          type={AvatarType.photo}
          size="large"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.placeholder}
          size="large"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.initials}
          size="large"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.icon}
          size="large"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
      </div>
      <div style={{ display: "flex", gap: 16, margin: "8px 0px" }}>
        <Avatar
          type={AvatarType.photo}
          size="xl"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.placeholder}
          size="xl"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.initials}
          size="xl"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
        <Avatar
          type={AvatarType.icon}
          size="xl"
          showStatus={true}
          status="online"
          {...avatarPropsRest}
        />
      </div>

      <p>Small</p>
      <Button variant="primary" size="small">
        Button
      </Button>
      <Button variant="primary" size="small" iconLeft={<ArrowDropDown />}>
        Button
      </Button>
      <Button
        variant="primary"
        size="small"
        iconLeft={<ArrowDropDown />}
        iconRight={<ArrowDropDown />}
      >
        Button
      </Button>
      <Button variant="primary" size="small" iconRight={<ArrowDropDown />}>
        Button
      </Button>
      <Button variant="primary" size="small" disabled>
        Button
      </Button>

      <Button variant="secondary" size="small">
        Button
      </Button>
      <Button variant="secondary" size="small" iconLeft={<ArrowDropDown />}>
        Button
      </Button>
      <Button
        variant="secondary"
        size="small"
        iconLeft={<ArrowDropDown />}
        iconRight={<ArrowDropDown />}
      >
        Button
      </Button>
      <Button variant="secondary" size="small" iconRight={<ArrowDropDown />}>
        Button
      </Button>
      <Button variant="secondary" size="small" disabled>
        Button
      </Button>

      <p>Default</p>
      <Button variant="primary" size="default">
        Button
      </Button>
      <Button variant="primary" size="default" iconLeft={<ArrowDropDown />}>
        Button
      </Button>
      <Button
        variant="primary"
        size="default"
        iconLeft={<ArrowDropDown />}
        iconRight={<ArrowDropDown />}
      >
        Button
      </Button>
      <Button variant="primary" size="default" iconRight={<ArrowDropDown />}>
        Button
      </Button>
      <Button variant="primary" size="default" disabled>
        Button
      </Button>

      <Button variant="secondary" size="default">
        Button
      </Button>
      <Button variant="secondary" size="default" iconLeft={<ArrowDropDown />}>
        Button
      </Button>
      <Button
        variant="secondary"
        size="default"
        iconLeft={<ArrowDropDown />}
        iconRight={<ArrowDropDown />}
      >
        Button
      </Button>
      <Button variant="secondary" size="default" iconRight={<ArrowDropDown />}>
        Button
      </Button>
      <Button variant="secondary" size="default" disabled>
        Button
      </Button>

      <p>Large</p>
      <Button variant="primary" size="large">
        Button
      </Button>
      <Button variant="primary" size="large" iconLeft={<ArrowDropDown />}>
        Button
      </Button>
      <Button
        variant="primary"
        size="large"
        iconLeft={<ArrowDropDown />}
        iconRight={<ArrowDropDown />}
      >
        Button
      </Button>
      <Button variant="primary" size="large" iconRight={<ArrowDropDown />}>
        Button
      </Button>
      <Button variant="primary" size="large" disabled>
        Button
      </Button>

      <Button variant="secondary" size="large">
        Button
      </Button>
      <Button variant="secondary" size="large" iconLeft={<ArrowDropDown />}>
        Button
      </Button>
      <Button
        variant="secondary"
        size="large"
        iconLeft={<ArrowDropDown />}
        iconRight={<ArrowDropDown />}
      >
        Button
      </Button>
      <Button variant="secondary" size="large" iconRight={<ArrowDropDown />}>
        Button
      </Button>
      <Button variant="secondary" size="large" disabled>
        Button
      </Button>

      <div
        style={{
          maxWidth: "100vw",
          display: "grid",
          gridTemplateColumns: "repeat(4, 24%)",
          gridGap: 10,
        }}
      >
        <p style={{ gridColumn: "1/5" }}>Empty</p>
        <InputField type="input" showExpandIcon={true} />
        <InputField type="select" showExpandIcon={true} />
        <InputField
          type="input"
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
        <InputField
          type="select"
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />

        <p style={{ gridColumn: "1/5" }}>Filled</p>
        <InputField
          type="input"
          inputProps={{ value: "ABC" }}
          showExpandIcon={true}
        />
        <InputField
          type="select"
          inputProps={{ value: { value: 1, label: "ABC" } }}
          showExpandIcon={true}
        />
        <InputField
          type="input"
          inputProps={{ value: "ABC" }}
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
        <InputField
          type="select"
          inputProps={{ value: { value: 1, label: "ABC" } }}
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />

        <p style={{ gridColumn: "1/5" }}>Disabled</p>
        <InputField type="input" disabled={true} showExpandIcon={true} />
        <InputField type="select" disabled={true} showExpandIcon={true} />
        <InputField
          type="input"
          disabled={true}
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
        <InputField
          type="select"
          disabled={true}
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />

        <p style={{ gridColumn: "1/5" }}>Error</p>
        <InputField type="input" isError={true} showExpandIcon={true} />
        <InputField type="select" isError={true} showExpandIcon={true} />
        <InputField
          type="input"
          isError={true}
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
        <InputField
          type="select"
          isError={true}
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />

        <p style={{ gridColumn: "1/5" }}>Show hint</p>
        <InputField type="input" showExpandIcon={true} />
        <InputField type="input" showHint={true} showExpandIcon={true} />
        <InputField type="select" showExpandIcon={true} />
        <InputField type="select" showHint={true} showExpandIcon={true} />
        <p style={{ gridColumn: "1/5" }}>Show hint with icon</p>
        <InputField
          type="input"
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
        <InputField
          type="input"
          showHint={true}
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
        <InputField
          type="select"
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
        <InputField
          type="select"
          showHint={true}
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />

        <p style={{ gridColumn: "1/5" }}>Show error hint</p>
        <InputField type="input" showExpandIcon={true} />
        <InputField
          type="input"
          isError={true}
          showHint={true}
          showExpandIcon={true}
        />
        <InputField type="select" showExpandIcon={true} />
        <InputField
          type="select"
          isError={true}
          showHint={true}
          showExpandIcon={true}
        />
        <p style={{ gridColumn: "1/5" }}>Show error hint with icon</p>
        <InputField
          type="input"
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
        <InputField
          type="input"
          isError={true}
          showHint={true}
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
        <InputField
          type="select"
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
        <InputField
          type="select"
          isError={true}
          showHint={true}
          icon={<OfficeBuildingIcon />}
          showExpandIcon={true}
        />
      </div>
    </div>
  );
};
