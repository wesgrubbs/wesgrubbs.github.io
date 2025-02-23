for file in $(find src/components -name "*.jsx"); do
  filename=$(basename "$file" .jsx)
  echo "export default function ${filename}() {
  return (
    <div>
      <h1>${filename}</h1>
    </div>
  )
}" > "$file"
done
