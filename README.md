# Infinite Loop in useEffect Hook

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state variables within the effect without proper dependency array management.  The `bug.js` file contains the problematic code, and `bugSolution.js` provides the corrected version.

## Problem

The `useEffect` hook in `bug.js` attempts to increment the `count` state variable in each render cycle. This creates an infinite loop because changing the state variable triggers a re-render, which in turn triggers the `useEffect` again, creating a continuous cycle of rendering and state updates. This will lead to performance issues, and potentially application crashes.

## Solution

The `bugSolution.js` file shows the corrected code. The key change is the inclusion of the `count` variable within the dependency array of the `useEffect` hook. This ensures that the effect only runs when the `count` value changes externally, rather than being constantly triggered by the internal state updates.

This example illustrates the importance of carefully managing dependencies in the `useEffect` hook to avoid unintended side effects and performance problems.