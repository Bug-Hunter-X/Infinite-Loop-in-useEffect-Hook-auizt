```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run infinitely because it sets a state variable
    // that causes the component to re-render, triggering the effect again.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}```