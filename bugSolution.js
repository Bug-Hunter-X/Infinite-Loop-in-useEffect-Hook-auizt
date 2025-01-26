```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The effect will run only once on mount
    // Correctly set the count to 0 initially
    setCount(0); 
  }, []);

  return <div>Count: {count}</div>;
}
```