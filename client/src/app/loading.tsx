import React from 'react';

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-surface flex flex-col items-center justify-center p-8">
      <img 
        alt="Al Maidah Logo" 
        className="h-12 w-auto object-contain animate-pulse mb-4" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUQDu7sGBAePI7lETEgGmdo-Vt9IXf6Meg6uDxusuCiDn8hTbMgKSZeM9XL51SuKLPq9fkGww6Wdo822eE4XSrIOyuvFO46LkBq4vdTaIjUdrVdh5qxFyC7edSpey4_0WyLhLYWYBwNOb8L86mP82LhIvoDKZW82mvrgfXHjVIVWcHba17mNdojLMlYj7KVoBhQvcGCBBq9bS8L6WPrGHpHB3JYbniRiqqaywEpsY-m3sN1SIWuEM"
      />
      <div className="w-48 h-1 bg-surface-container rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full bg-primary animate-[translate_1.5s_ease-in-out_infinite] w-1/2 rounded-full"></div>
      </div>
    </div>
  );
}
