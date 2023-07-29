---
templateKey: 'simple-page'
path: /gpml
title: GPML
---

### What is GPML?

---

__GPML__ is the GPlates Markup Language, the “native” file format of GPlates. GPML is custom-designed for geological and geographic data in a plate-tectonics context. At this time, GPML is the only file format capable of representing all the various types of current and next-generation data used in GPlates for next-generation plate-tectonics research.

GPML is an XML-based language for plate-tectonics data, just as [KML](https://www.ogc.org/standards/kml/) (used by [Google Maps](https://www.google.com/maps) and [Google Earth](https://www.google.com/earth/)) is an XML-based language for geographic annotations. In the future, GPlates will offer the ability to export geographic snapshots as KML.

### How is GPML defined?

---

GPML is defined by the __GPGIM__, the [GPlates Geological Information Model](http://www.earthbyte.org/Resources/GPGIM/), an application schema of [GML](https://www.ogc.org/standards/gml) which specifies and describes:

* the geological, geographic and tectonic entities which GPlates simulates
* the conceptual building-blocks which GPlates defines
* the processing and simulation constraints to which GPlates adheres.

The [GPlates software developers](/contact) have worked closely with the scientists to create, refine and evolve the GPGIM specification over time, since this document both specifies formally what the programmers need to implement in the GPlates software, and defines the geological terminology in precise modelling terms, to enable the scientists and software developers to communicate most effectively using a shared vocabulary.

### Why use GPML?

---

When geological features or reconstruction poles are loaded in GPlates, the data are contained in GPlates as [GPGIM features](http://www.earthbyte.org/Resources/GPGIM/public/). Since the structure of GPML corresponds to the GPGIM, GPML is the closest representation to the internal data representation of GPlates. Saving your GPlates data in GPML ensures that no information will be lost due to file format limitations or incompatibilities.

Since GPML is an XML format, it is more easily understood by other software, and the XML structure of a GPML file may be validated automatically by XML-validating software. However, the downside to XML is that it can be quite verbose, so general-purpose GPML files are usually larger than special-purpose proprietary formats like the Plates4 and ESRI Shapefile formats. For this reason, GPlates also offers the __compressed GPML__ format, which is GPML compressed by the open-source [gzip](http://www.gzip.org/) program. A compressed GPML file can be up to 1/30th the size of the corresponding regular GPML file, and approximately 60% of the size of the equivalent Plates4 file!

