The solution involves checking if `data` is null before accessing `data.name`.  Two common approaches are:

1. **Conditional Rendering:**

```javascript
function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}
```

2. **Optional Chaining:**

```javascript
function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name || 'N/A'}</Text> 
    </View>
  );
}
```

The optional chaining operator (`?.`) safely accesses the `name` property only if `data` is not null.  The `|| 'N/A'` provides a fallback value if `data.name` is still undefined.