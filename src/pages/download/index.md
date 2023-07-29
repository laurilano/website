---
templateKey: 'simple-page'
path: /download
title: Download GPlates and Data
---

### Download GPlates
---

The current stable release of GPlates is [GPlates 2.3](/news/2021-09-08-GPlates-2-3-released/), released in September 2021...

<div class="download-box">
    <table>
    <tbody>
        <tr>
            <td class="icon">
                <a href="https://www.earthbyte.org/download-gplates-2-3/">
                    <img src="./img/GPlates-tango-actions-go-down-48.png" alt="Download GPlates">
                </a>
            </td>
            <td class="content" >
                <a href="https://www.earthbyte.org/download-gplates-2-3/" title="GPlates 2.3 packages">
                <strong>Download GPlates 2.3</strong>
                </a>
                <p>(the latest “stable” release)</p>
            </td>
        </tr>
    </tbody>
    </table>
</div><br>

The current beta release of pyGPlates is [pyGPlates 0.36](/news/2022-05-06-PyGPlates-0-36-released/), released in May 2022...

<div class="download-box">
    <table>
    <tbody>
        <tr>
            <td class="icon">
                <a href="https://www.earthbyte.org/download-pygplates-0-36/">
                    <img src="./img/GPlates-tango-actions-go-down-48.png" alt="Download pyGPlates">
                </a>
            </td>
            <td class="content" >
                <a href="https://www.earthbyte.org/download-pygplates-0-36/" title="PyGPlates 0.36 packages">
                <strong>Download pyGPlates 0.36</strong>
                </a>
                <p>(the latest “beta” release)</p>
            </td>
        </tr>
    </tbody>
    </table>
</div><br>

GPlates and pyGPlates run on __Windows__, __macOS__ and __Linux__.

<div class="download-box">
    <table>
    <tbody>
        <tr>
            <td class="icon">
                <a href="https://github.com/GPlates/gplately">
                    <img src="./img/GPlates-tango-actions-go-down-48.png" alt="Download GPlately">
                </a>
            </td>
            <td class="content" >
                <a href="https://github.com/GPlates/gplately" title="PyGPlates 0.36 packages">
                <strong>Download GPlately 1.0</strong>
                </a>
                <p>(the latest “stable” release)</p>
            </td>
        </tr>
    </tbody>
    </table>
</div><br>

#### GPlates binary packages

Ready-to-use binary packages are available to install GPlates on Windows, macOS and Ubuntu. These also include the GPlates-compatible geodata described below.

* For __Windows__, we provide an `.exe` __installer__ for a 64-bit version of GPlates on a 64-bit version of Windows. We also provide a `.zip` file for users who wish to use GPlates without installing it.
* For __macOS__, we provide a `.dmg` __disk image__ containing a 64-bit version of GPlates for __High Sierra__ (10.13) or above.
    * Note that this works on both __Intel__ (x86_64) and __Apple Silicon__ (arm64).
* For __Ubuntu__, we provide `.deb` __packages__ for 64-bit Ubuntu versions (that are currently under support).
    * If you are using a different Linux distribution please use the source code package instead.

Installation instructions for GPlates can be found on the [download page](https://www.earthbyte.org/download-gplates-2-3/).

#### PyGPlates binary packages

Ready-to-use binary packages are available to install pyGPlates on Windows, macOS and Ubuntu. These do __not__ include the GPlates-compatible geodata.

* For __Windows__, we provide a `.zip` file for each Python version (3.7, 3.8, 3.9 and 3.10).
    * Containing 64-bit pyGPlates for use on a 64-bit version of Windows.
* For __macOS__ on __Intel__ (x86_64), we provide a `.zip` file for each Python version (3.7, 3.8, 3.9 and 3.10).
    * Containing 64-bit pyGPlates for use on an __Intel__ Mac running macOS __Catalina__ (10.15) or above.
* For __macOS__ on __Apple Silicon__ (arm64), we provide a `.zip` file for each Python version (3.7, 3.8, 3.9 and 3.10).
    * Containing 64-bit pyGPlates for use on an __Apple Silicon__ Mac running macOS __Big Sur__ (11) or above.
* For __Ubuntu__ on __Intel__ (amd64) and __ARM__ (arm64), we provide a `.deb` __package__ for each 64-bit Ubuntu version.
    * Packages are provided for Ubuntu versions under [standard](https://en.wikipedia.org/wiki/Ubuntu_version_history#Table_of_versions) support.
    * The Ubuntu version determines the Python version (eg, Ubuntu Jammy 22.04 uses Python 3.10).
    * If you are using a different Linux distribution please use the source code package instead.

Installation instructions for pyGPlates can be found in the [pyGPlates documentation](/docs/pygplates/pygplates_getting_started.html#installing-pygplates).

#### GPlates and pyGPlates source code

We provide source-code packages for Windows (in a zip-file), and Linux and macOS (in a tarball).
The source-code packages do not contain geodata (described below) which will need to be downloaded separately.

To compile GPlates (or pyGPlates) from source, you will require:

* [__Boost__](https://www.boost.org/) 1.35 or above
* [__CGAL__](https://www.cgal.org/) 4.7 or above (preferably 4.12 or above)
* [__CMake__](https://cmake.org/) 3.10 or above
* [__GDAL__](https://gdal.org/) 1.3.2 or above (preferably 2 or above)
* [__GLEW__](http://glew.sourceforge.net/)
* [__PROJ__](https://proj.org/) 4.6 or above (preferably 6 or above)
* [__Python__](http://python.org/) 3.7 or above (or 2.7)
* [__Qt__](https://www.qt.io/) 5.6 or above
* [__Qwt__](https://qwt.sourceforge.io/) 6.0.1 or above (preferably 6.1 or above)

Instructions on how to compile GPlates (or pyGPlates) from source may be found in the source-code releases, in the files:

* `DEPS.Linux` and `BUILD.Linux` (on Linux)
* `DEPS.OSX` and `BUILD.OSX` (on macOS)
* `DEPS.Windows` and `BUILD.Windows` (on Windows)

Please note that you should not attempt to compile GPlates from the pyGPlates source code. Or attempt to compile pyGPlates from the GPlates source code.

GPlates (and pyGPlates) is [free software](https://www.gnu.org/philosophy/free-sw.html) (also known as [open-source](https://opensource.org/docs/definition.php) software), licensed for distribution under the GNU [General Public License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) (GPL) version 2.

#### GPlately installation

**1. Using conda (recommended)**

You can install the latest stable public release of `GPlately` and all of its dependencies using conda.
This is the preferred method to install `GPlately` which downloads binaries from the conda-forge channel.

```sh
conda install -c conda-forge gplately
```

**Creating a new conda environment**

We recommend creating a new conda environment inside which to install `GPlately`. This avoids any potential conflicts in your base Python environment. In the example below we create a new environment called "`my-env`":

```sh
conda create -n my-env
conda activate my-env
conda install -c conda-forge gplately
```

`my-env` needs to be activated whenever you use `GPlately`: i.e. `conda activate my-env`.

**2. Using pip**

Alternatively, you can install the latest stable public release of `GPlately` using the pip package manager.

```sh
pip install gplately
```
or from this GitHub repository:

```sh
pip install git+https://github.com/GPlates/gplately.git 
```

**Pull from repository**

**First-time installation:** To install the latest version of GPlately from a specific repository branch (e.g. `master`), copy the following commands into your terminal:

```sh
cd /path/to/desired/directory #Change your command directory to where you'd like to clone GPlately
git clone https://github.com/GPlates/gplately.git
cd gplately # navigate within the gplately folder
git checkout master # or the name of whichever branch you need
git pull # fetch all recent changes from this branch
pip install .
```

**Update installation from cloned repo:** To update your installation of GPlately by fetching the latest pushes from a specific repository branch (e.g. `master`), copy the following commands into your terminal:

```sh
cd /path/to/gplately/directory #Should be where gplately is cloned - must end in /.../gplately
git checkout master # or the name of whichever branch you need
git pull # fetch all recent changes from this branch
pip install .
```

### Download GPlates-compatible Data

---

Researchers in the [EarthByte Project](https://www.earthbyte.org/) have made [GPlates-compatible data](http://www.earthbyte.org/gplates-2-3-software-and-data-sets/) available for use with GPlates.

A [sample set](http://www.earthbyte.org/gplates-2-3-software-and-data-sets/) of these data-files are also contained within the GPlates installation packages, and will be automatically installed with GPlates. This data has been updated for the GPlates 2.3 release. Thanks to the EarthByte Project for making these data-files available!

Go to [EarthByte website](https://www.earthbyte.org/category/resources/data-models/) for more data and models.

### Download GPlates Logo

---

<img width="200px" src="/img/newlogo.svg" alt="GPlates Logo">

You may download GPlates logo in SVG format. Click [here](https://www.earthbyte.org/webdav/ftp/earthbyte/GPlates_logo.zip) to download GPlates logo files.

### GPlates Download Statistics

---

Click [here](https://earthbyte.org/gplates-download-stats/index.php) to see the GPlates download statistics.
