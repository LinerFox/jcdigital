// Then import schema types from any plugin that might expose them
import createSchema from "part:@sanity/base/schema-creator";
import experience from "./experience";
// We import object and document schemas
import pageInfo from "./pageInfo";
import projects from "./projects";
import schemaTypes from "all:part:@sanity/base/schema-type";
import skill from "./skill";
import social from "./social";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([pageInfo, experience, projects, skill, social]),
});
