# Migration Guide: Ruby/CoffeeScript to Node.js/TypeScript

## Overview
This document outlines the migration from the original Ruby/Sinatra + CoffeeScript stack to Node.js/Express + TypeScript.

## What Changed

### Backend Server
- **Before**: Ruby with Sinatra framework (`app.rb`, `config.ru`)
- **After**: Node.js with Express (`server.js`)

### Game Code
- **Before**: CoffeeScript files in `app/coffee/`
- **After**: TypeScript files in `src/` compiled to `public/js/`

### Build Process
- **Before**: Rack middleware for CoffeeScript compilation
- **After**: TypeScript compiler with npm scripts

### File Structure
```
Before:
app/
├── coffee/
│   ├── base/
│   ├── models/
│   └── ...
├── views/
│   └── index.erb
app.rb
config.ru
Gemfile

After:
src/
├── base/
├── models/
└── ...
public/
├── js/ (compiled TypeScript)
├── css/
├── images/
└── index.html
server.js
package.json
tsconfig.json
```

## Migration Benefits

1. **Type Safety**: TypeScript provides compile-time type checking
2. **Modern JavaScript**: ES6+ features and module system
3. **Better Tooling**: Rich IDE support and debugging
4. **Unified Stack**: Single language (JavaScript/TypeScript) for both client and server
5. **Performance**: Node.js typically has better performance characteristics than Ruby
6. **Ecosystem**: Access to the vast npm ecosystem

## Preserved Functionality

- All game mechanics remain identical
- Same visual appearance and feel
- Same keyboard controls
- Same level progression
- Same sprite and asset management

## Files to Remove (Legacy)

The following Ruby/CoffeeScript files are no longer needed:
- `app.rb`
- `config.ru` 
- `Gemfile`
- `Gemfile.lock`
- `app/coffee/` (entire directory)
- `app/views/` (entire directory)

## Deployment Changes

- **Procfile** updated to use `npm start` instead of `bundle exec rackup`
- No Ruby dependencies needed
- Node.js runtime required instead of Ruby runtime