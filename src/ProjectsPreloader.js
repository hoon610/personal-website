import React, { lazy, Suspense } from "react";

const LazyProjects = lazy(() => import("./pages/Projects"));

function ProjectsPreloader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyProjects />
    </Suspense>
  );
}

export default ProjectsPreloader;
