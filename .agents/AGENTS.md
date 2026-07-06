# Custom Agent Rules for Portfolio Project

## Testing & Token Conservation
- **Do not use token-intensive testing tools** (such as spawning a `browser_subagent` or performing heavy web automation checks) unless explicitly asked by the user.
- **Show changes to the user for validation**: Provide code diffs, links to generated files, or screenshots when available, and ask the user to validate the changes on their end (e.g., running localhost or visiting the deployed site) instead of running automated agent validations.
