import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const increment = () => setlike(like + 1);
  const decrement = () => setdislike(dislike + 1);
  return (
    <div className="button">
      <IconButton onClick={increment} aria-label="like" color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton onClick={decrement} aria-label="like" color="error">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}