import './Classes.css';

export default function Classes() {
  const dangerous = false; 
  const backgroundColor = dangerous ? 'red' : 'green';
  
  return (
    <div id="wd-classes">
      <h2>Classes</h2>
      <div className={`wd-bg-${backgroundColor} wd-fg-black wd-padding-10px`}>
        {dangerous ? 'Dangerous Red background' : 'Safe Green background'}
      </div>
    </div>
  );
}