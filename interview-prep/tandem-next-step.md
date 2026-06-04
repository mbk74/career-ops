# Interview Prep App

## Goal

Build a small iOS app using:
- ReSwift
- RxSwift
- UIKit
- SwiftUI
- SPM
- REST or GraphQL API
- Legacy Objective-C interoperability

## API

Use Rick and Morty API.

REST:
https://rickandmortyapi.com/api/character

GraphQL:
https://rickandmortyapi.com/graphql

## Features

1. Character list
2. Search by name
3. Pagination
4. Character details screen
5. Loading / error / empty states
6. Pull to refresh
7. Accessibility support
8. Unit tests for state/reducer/service layer

## Architecture

- AppState
- Actions
- Reducer
- Middleware for networking
- Repository / API Client
- UIKit list screen
- SwiftUI detail screen embedded via UIHostingController
- RxSwift for binding async data streams
- Objective-C legacy helper bridged into Swift
- Dependencies managed by SPM