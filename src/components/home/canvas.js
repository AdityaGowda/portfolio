"use client";
import { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 950) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to adjust canvas pixel ratio
    const adjustCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    adjustCanvasSize();

    const rays = [];
    const stars = [];
    const numRays = isMobile ? 15 : 9; // Number of rays
    const numStars = isMobile ? 250 : 180; // Number of stars

    // Function to generate a random color
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        alpha: Math.random(),
      });
    }

    // Initialize rays starting from the top edge and right edge
    for (let i = 0; i < numRays; i++) {
      let startX, startY;
      if (Math.random() < 0.5) {
        // Start from top edge
        startX = Math.random() * canvas.width; // Random X position
        startY = 0; // Fixed at the top
      } else {
        // Start from right edge
        startX = canvas.width; // Fixed at the right
        startY = Math.random() * canvas.height; // Random Y position
      }
      const length = Math.random() * 100 + 50; // Length between 50 and 150
      const color = getRandomColor();
      const depth = Math.random() * 10 + 1; // Depth factor between 1 and 3
      const progress = Math.random() * 1000; // Random initial progress
      rays.push({ startX, startY, length, color, progress, depth });
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      // Draw stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      rays.forEach((ray) => {
        // Update the progress of the ray based on depth
        ray.progress += 0.8 * ray.depth; // Adjust speed here

        // Calculate the current endpoint of the ray
        const endX = ray.startX - ray.length * (ray.progress / 500); // Move left
        const endY = ray.startY + ray.length * (ray.progress / 400); // Move down

        // Draw the ray as a white line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"; // White transparent line
        ctx.lineWidth = 1.8 / ray.depth; // Adjust line width based on depth
        ctx.beginPath();
        ctx.moveTo(ray.startX, ray.startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Draw the endpoint as a colored dot
        ctx.fillStyle = ray.color; // Random color for the dot
        ctx.beginPath();
        ctx.arc(endX, endY, 3.5 / ray.depth, 0, Math.PI * 2); // Adjust dot size based on depth
        ctx.fill();

        // Reset the ray if it goes off-screen
        if (endY > canvas.height || endX < 0) {
          ray.progress = 0; // Reset progress
          if (Math.random() < 0.5) {
            // Start from top edge
            ray.startX = Math.random() * canvas.width; // New random X position
            ray.startY = 0; // Start from the top edge
          } else {
            // Start from right edge
            ray.startX = canvas.width; // Start from the right edge
            ray.startY = Math.random() * canvas.height; // New random Y position
          }
          ray.length = Math.random() * 100 + 50; // New random length
          ray.color = getRandomColor(); // New random color
          ray.depth = Math.random() * 2 + 1; // New random depth
          ray.progress = Math.random() * 500; // New random initial progress
        }
      });

      requestAnimationFrame(update); // Call update again for the next frame
    }

    // Background animation
    function drawBackground() {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#000428");
      gradient.addColorStop(1, "#004e92");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function animate() {
      drawBackground(); // Draw the background
      update(); // Update the rays
    }

    animate(); // Start the animation

    // Handle window resize
    const handleResize = () => {
      adjustCanvasSize();
      drawBackground(); // Redraw the background on resize
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      ref={canvasRef}
    ></canvas>
  );
};

export default Canvas;
