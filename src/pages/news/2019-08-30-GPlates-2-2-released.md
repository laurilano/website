---
templateKey: 'news'
title: 'GPlates 2.2 released'
date: 2019-08-30T15:04:10.000Z
featuredpost: false
featuredimage: ../../img/SATL_ExponentialStretching_650x380.png
description: >-
  What's new in GPlates 2.2? Deformation, Topologies, Projects and recent sessions, etc...
tags:
  - pyGPlates
  - release
  - python3
---
![GPlates 2.2 released](../../img/SATL_ExponentialStretching_650x380.png)

#### A few points to note regarding this release:-

* The Sample Data includes the Matthews et al. (2016) model, which has been updated to include the corrections to the Pacific rotations prior to 83 Ma according to Torsvik et al. (2019). __Please update your local datasets__.
  * Matthews, K. J., Maloney, K. T., Zahirovic, S., Williams, S. E., Seton, M., and Müller, R. D., 2016, Global plate boundary evolution and kinematics since the late Paleozoic: Global and Planetary Change, DOI: 10.1016/j.gloplacha.2016.10.002
  * Torsvik, T.H., Steinberger, B., Shephard, G.E., Doubrovine, P.V., Gaina, C., Domeier, M., Conrad, C.P. and Sager, W.W., 2019. Pacific-Panthalassic reconstructions: Overview, errata and the way forward. Geochemistry, Geophysics, Geosystems, DOI:10.1029/2019GC008402
* There is now a 64-bit version of GPlates for Windows:
  * The 64-bit Windows installer works on 64-bit versions of Windows 7/8/8.1/10.
  * The 32-bit Windows installer works on 32-bit and 64-bit versions of Windows 7/8/8.1/10.
* Currently there are some issues with 3D scalar fields on macOS Mojave (10.14) and above:
  * This happens on some Macs with AMD graphics (specifically we've noticed AMD Radeon Pro 460).
  * 3D scalar fields render incorrectly and then crash in the graphics driver.
  * Note that disabling automatic GPU switching does not help, since this always uses the discrete graphics (eg, AMD) and not the integrated graphics (eg, Intel HD).
* Also, the first time you open GPlates on macOS 10.12 Sierra (and above) you will need to Control-click (or right click) and select Open.


#### What's new in GPlates 2.2:-

* Deformation:
  * Option to generate 'exponential' stretching profiles across rifts (instead of default constant stretching).
      * Activated by adding 'rift' left/right plate IDs to any deforming network.
      * Optionally specify three control parameters:
          * One parameter controls the exponential constant.
          * The other two parameters control how closely to approximate exponential curve (with better approximations running slower).
  * Calculate, visualize and export strain rate "style":
      * A unit-less quantity defined in Kreemer et al. 2014, categorizing extension, contraction and strike-slip.
  * Support deforming networks in Net Rotation export (in addition to rigid plates).
  * Option to generate deforming mesh points inside interior rigid blocks in deforming networks.
* Topologies:
  * Updated CitcomS topology export:
      * Option to export all (plate/network/slab) polygons and all (plate/network/slab) boundary segments.
      * Fixed missing plates (that were not of type TopologicalClosedPlateBoundary; eg, OceanicCrust).
  * Updated General topology export:
      * Option to export boundary segments.
          * Including separate subduction, subduction left/right, ridge/transform files (similar to CitcomS topology export).
      * Boundary segments are not duplicated.
  * Robust determination of velocities along topological boundaries (of rigid plates and deforming networks):
      * Notably in the presence of deforming *lines* (eg, topological lines made from independently moving points).
      * Results in robust strain rates in topological networks (especially at intersecting boundary corners).
* Projects and recent sessions:
  * Save time slider range to project/session.
      * Also extend default time range to 410Ma (from 200Ma) for rotation model in sample data.
* File formats:
  * Can load/save GeoPackage geometry files.
  * All non-GPML geometry formats (Shapefile, etc) no longer force a feature to have all mapped properties:
      * Avoids adding a property to a feature that it didn't have (eg, conjugate plate ID).
  * Support UTF8 when loading (and saving) PLATES4 line and rotation formats.
      * Useful when rotation comments contain non-ASCII characters.
* Rendering:
  * Can show/hide rasters, 3D scalar fields and scalar coverages.
      * In "View > Geometry Visibility" menu.
  * Can show/hide topological lines, polygons and networks (in same menu).
      * Can also show/hide topological 'sections' (those geometries contributing to topological boundaries/interiors).
          * So only see final continuously-closed topological boundaries.
      * GPlates now hides these dangling pieces by default (advanced users can change the default though).
  * Velocity layers can calculate/visualize velocities on *domains* that are topology layers (as opposed to *surfaces*).
      * At the *vertices* of topological lines, polygons and networks.
  * Render clicked (white) geometries on top of non-clicked (grey) geometries (belonging to the same feature).
      * Useful when the feature's geometries overlap.
* GPlates Geological Information Model (GPGIM):
  * Added new GPGIM feature type 'DeformingRegionEdge' that is edge of a deforming region but not also a plate boundary.
  * Allow MeshNode feature to contain a point geometry (previously only allowed a multi-point).
      * Enables single point to automatically create a velocity layer (because only MeshNode features do this).
  * Added properties for rift exponential stretching:
      * 'riftLeftPlate' and 'riftRightPlate' - conjugate rigid plates bounding a rift topological network.
      * 'riftExponentialStretchingConstant' - controls exponential variation across rift stretching profile.
      * 'riftEdgeLengthThresholdDegrees' and 'riftStrainRateResolutionLog10' - control approximation to true exponential curve.
  * Removed topological network properties 'networkMaxEdge' and 'networkShapeFactor' (no longer used).
* Geometry tests:
    * Assigning plate IDs is much faster (especially dense geometries like coastlines).
    * Robust polyline intersection testing, and significantly faster.
    * Distances to polygons (from another geometry) now take into account any interior rings of the polygon.
* Bug fixes:
    * Fixed hang on start up on some Mac systems (where network interface appears active but network is unavailable).
    * Fixed time-dependent raster import (and 3D scalar field import) not accepting filenames with uppercase extensions.
    * Fixed crash triggered when exporting total strains.
    * Fixed crash when exiting GPlates on some Ubuntu versions (due to freeing same memory twice).
    * Fixed crash when saving a rotation feature with a 'gml:name' or 'gml:description' property to a PLATES4 rotation file.
    * Fix crash loading a GPML file containing a feature property that cannot be interpreted using any property defined in the GPGIM.
* Build:
    * Support Visual Studio 2015/2017 (GDAL 2.3 uses C++11 which requires VS2015), and update Windows build docs accordingly.
    * Fixed incorrect 90 degree rotation of rasters with inbuilt projections (eg, Lambert Conformal Conic) when GPlates compiled with GDAL 3.0.
    * Upgraded support to new Proj6 API (also support deprecated Proj4 API).
    * Added SQLite3 dependency library (due to adding support for GeoPackage vector format).
    * Support Boost 1.66 (added x32/x64 architecture tags) and Boost 1.67 (added Python version suffix 'python27').
    * Fixed CMake error finding GMP library on Windows (recent CGAL versions already link to GMP, so GPlates doesn't need to).
    * Work around internal compiler error (gcc 5.4) on Ubuntu Xenial (16.04).
    * No longer combine '-ansi' (equivalent to '-std=c++98') and '-std=c++11' flags (first noticed on gcc 9.1).
    * No longer turn warnings into errors:
        * There are lots of warnings generated by dependency libraries (that we can't easily fix), and by new compilers.

...and other changes listed in the CHANGELOG file in the [GPlates source-code releases](/download).

GPlates 2.2 compiles and runs on Windows 7/8/8.1/10, Linux and MacOS X.

Download GPlates 2.2 from the [Download](/download) page.

GPlates-compatible data have been made available, and has been updated for the GPlates 2.2 release. For more information, see the [Download](/download) page.
