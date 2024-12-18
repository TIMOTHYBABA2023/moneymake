'use client'
import React from 'react'
import { useState } from "react"
import { ChangeEvent } from 'react';


const TestController = () => {
    const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };
  return (
    <div className="profile-container flex flex-col relative">TestController
        <div
        className="profile-background"
        style={{
          backgroundImage: `url(${backgroundImage || "/default-bg.jpg"})`,
        }}
      >
      </div>
      <label htmlFor="imageUpload" className="upload-icon">
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <span>📷</span>
        </label>
    </div>
  )
}

export default TestController;