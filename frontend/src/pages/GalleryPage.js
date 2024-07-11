import React from "react";
import ImageGallery from "react-image-gallery";
import '../App.css';

const images = [
  {
    original: "images/splits-pose-elbowstand-pilates-reformer.jpg",
    thumbnail: "images/splits-pose-elbowstand-pilates-reformer.jpg",
    description: `Allison Majors in an elbowstand with her legs in the
      splits in a pilates class.`,
    originalHeight: "450px",
  },
  {
    original: "images/world-trade-center.jpg",
    thumbnail: "images/world-trade-center.jpg",
    description: `Photo taken by Allison Majors of the World Trade Center in New York.`,
    originalHeight: "450px",
  },
  {
    original: "images/homemade-bread-glutenfree.jpg",
    thumbnail: "images/homemade-bread-glutenfree.jpg",
    description: `Homemade gluten-free sourdough bread made by Allison Majors.`,
    originalHeight: "450px",
  },
  {
    original: "images/golden-gate-bridge.jpg",
    thumbnail: "images/golden-gate-bridge.jpg",
    description: `Photo taken by Allison Majors of the Golden Gate Bridge in San Francisco.`,
    originalHeight: "450px",
  },
  {
    original: "images/statue-of-liberty-nyc.jpg",
    thumbnail: "images/statue-of-liberty-nyc.jpg",
    description: `Photo taken by Allison Majors of the Statue of Liberty in New York.`,
    originalHeight: "450px",
  },
  {
    original: "images/count-sequence-generator-code-python.png",
    thumbnail: "images/count-sequence-generator-code-python.png",
    description: `Code written by Allison Majors for a "count_seq" function, which contains a generator function that creates a sequence where we count 
        each digit in a row from the previous sequence.`,
    originalHeight: "450px",
  },
  {
    original: "images/bubble-count-code-python.png",
    thumbnail: "images/bubble-count-code-python.png",
    description: `Code written by Allison Majors for a "bubble_count" function, which counts the number of comparisons and
        exchanges made during the bubble sort algorithm.`,
    originalHeight: "450px",
  },
  {
    original: "images/string-sort-code-python.png",
    thumbnail: "images/string-sort-code-python.png",
    description: `Code written by Allison Majors for a "string_sort" function, which uses insertion
        sort to sort a list of strings in place.`,
    originalHeight: "450px",
  },
  {
    original: "images/insertion-count-code-python.png",
    thumbnail: "images/insertion-count-code-python.png",
    description: `Code written by Allison Majors for a "insertion_count" function, which counts the number of comparisons and
        exchanges made during the insertion sort algorithm.`,
    originalHeight: "450px",
  },
  {
    original: "images/string-subsequence-code-python.png",
    thumbnail: "images/string-subsequence-code-python.png",
    description: `Code written by Allison Majors for an "is_subsequence" function, 
        which returns True if one string is a subsequence of another.`,
    originalHeight: "450px",
  },
];

function GalleryPage() {
  return (
    <>
      <h2>Gallery</h2>
      <p>This page contains images of work made by Allison Majors.</p>
      <article>
        <ImageGallery items={images} />
      </article>
    </>
  );
}

export default GalleryPage;
