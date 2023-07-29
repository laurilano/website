---
templateKey: 'news'
title: 'GPlates 0.9.5 released'
date: 2009-06-17
featuredpost: true
featuredimage: ./img/Robinson-projection-small.png
description: >-
  GPlates 0.9.5 has been released on 17 June, 2009.
tags:
  - release
---

![GPlates 0.9.5 released](./img/Robinson-projection-small.png)

The massive __GPlates 0.9.5__ release in fact consists of two simultaneous software releases:

* the “official” release of the GPlates “stable mainline” (like all previous 0.9.x releases), named GPlates 0.9.5
* the “testing” release of the widely-anticipated extension functionality for continuously-closing plates and lithosphere velocity fields which was developed primarily at [CalTech](http://www.gps.caltech.edu/), named GPlates 0.9.5 + platepolygon-testing.

The GPlates 0.9.5 release features the following changes since 0.9.4:

* GPlates can now __export feature data__ in the __Shapefile__ format. (This complements the existing ability to import Shapefiles into GPlates as feature data.)
* Additionally, GPlates can now __export “reconstructed geometries”__ (feature geometries at a particular reconstruction time in the past) in both the __Shapefile__ and __GMT__ formats.
* GPlates is now able to display the Earth in a variety of __map projections__ (in addition to the existing 3-D Orthographic Globe projection):
  * Rectangular
  * Mercator
  * Mollweide
  * Robinson

As was possible with the existing 3-D Orthographic Globe projection, each of these map-projections can be exported as a __2-D geometry snapshot__ (a 2-D vector-graphics image in the SVG format), for later viewing in a web-browser or vector-graphics editor.

* The advanced functionality of the new __Export Animation__ dialog enables you to harness the power of the GPlates reconstruction engine to create your own __“data animations”__, exporting a sequence of frames from an animation and saving it to disk in a sequence of files. Currently, the Export Animation dialog offers the following export functions:
* all reconstructed feature geometries (as GMT .xy files or Shapefiles)
* a 2-D vector graphics snapshot of the view (as SVG files)
* all velocity fields (as GPML files)

More export functions will be added in the future.

* The GPlates main window has enjoyed a minor re-design of its layout, to improve the locality of the controls: Now the reconstruction-time controls are together above the reconstruction view, and the view controls (zoom, choice of map projection, and camera and mouse positions) are together below the reconstruction view. This re-design allowed us to incorporate an integrated __animation time-slider__ in with the time controls.
* GPlates is now released as a __MacOS X binary bundle__ in a .dmg file (in addition to the existing Windows binary installer and the Linux/UNIX and Windows source-code packages). To install GPlates on MacOS X, simply:
* double-click on the .dmg file to open the disk image in Finder,
* drag the GPlates binary into your Applications folder.
* It's now even easier than before to manipulate geometries interactively. When you're deciding which vertex you want to move using the __Move Vertex__ tool, each vertex will __light up__ yellow when you pass the mouse pointer over it, and the coordinates of the vertex also light up yellow in the Task Panel. You can move vertices of existing feature geometries or vertices of partially-digitised geometries.
* You can now __insert vertices__ into the middle of an existing feature geometry, or even __extend__ the feature geometry at either end, using the new __Insert Vertex__ tool. If the mouse pointer is over a line-section of the geometry, the line-section will light up, and you can click the mouse button once to insert a new vertex. If the mouse pointer is past either end of the geometry, you can click once to extend the geometry from that end.
* You can also __delete a vertex__ from a geometry using the new __Delete Vertex__ tool. The geometry which will be deleted will __light up red__, and the coordinates of the geometry will also light up red in the Task Panel.
* GPlates offers Better handling of multi-geometries (multiple-geometries per feature): both in the loading and saving of files; and in the feature focus and canvas tools in the user-interface.
* The official [GPlates user-manual](/docs) is now online!

The GPlates 0.9.5 + platepolygon-testing release builds upon the simultaneous GPlates 0.9.5 “stable” release, adding the following advanced extension functionality:

* __continuously-closing plates__, utilising the new __topological geometry__ functionality for the construction of time-varying topological plate-boundary polygons
* the calculation of __lithosphere velocity fields__, utilising the calculation of plate-motion velocities at CitComS mesh-node locations
* velocity-field __arrow decorations__ — which are zoom-dependent, so that both the size of the arrows and the visual density of the arrows (i.e., the number of arrows drawn on the visible area of the surface of the Earth) scale automatically with zoom
* the new __Topology Sections table__ which displays, and enables tabular editing of, topologies
* automated generation and export of velocity fields as GML DataBlock instances

GPlates 0.9.5 compiles and runs on Windows Vista, Windows XP, Linux and MacOS X. Qt 4.3.2 (or above) and CMake are required. Download GPlates 0.9.5 from the [Download](/download) page.

GPlates-compatible data have been made available. For more information, see the [Download](/download) page.