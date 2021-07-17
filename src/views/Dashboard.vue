<template>
  <div class="w-full">
    <h1 class="text-xl font-semibold">Dashboard</h1>
    <div class="w-full h-auto mb-5">
      <Cardboard />
    </div>
    <div class="w-full flex flex-col xl:flex-row">
      <section
        class="w-full xl:w-4/5 px-4 h-109 p-5 bg-white border shadow rounded-xl mr-5 overflow-hidden"
      >
        <!-- SORT -->
        <div class="flex justify-between items-center">
          <h1 class="text-base font-semibold">Master List</h1>
          <div class="flex items-center space-x-5 text-gray-500">
            <p class="hidden sm:block">Displaying 1 - 5 of records</p>
            <select class="py-1">
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
        </div>
        <!-- TABLE -->
        <div class="relative w-full h-102 border my-5 overflow-y-auto">
          <Table>
            <template v-slot:table-header>
              <th>Name</th>
              <th class="hidden sm:table-cell">Section</th>
              <th class="hidden sm:table-cell">Level</th>
              <th>Status</th>
            </template>

            <template v-slot:table-data>
              <tr>
                <td class="flex justify-start items-center">
                  <div
                    class="flex justify-center items-center text-blue-500 font-light w-9 h-9 rounded-full bg-gray-200 mr-3"
                  >
                    AF
                  </div>
                  <div>
                    <p class="font-semibold text-black">
                      Andrew Erro Ferrer
                    </p>
                    <p class="text-sm text-blue-500">STU 2021-1</p>
                  </div>
                </td>
                <td class="hidden sm:table-cell">BSIT - 3E</td>
                <td class="hidden sm:table-cell">1st year</td>
                <td class="text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td class="flex justify-start items-center">
                  <div
                    class="flex justify-center items-center text-blue-500 font-light w-9 h-9 rounded-full bg-gray-200 mr-3"
                  >
                    JS
                  </div>
                  <div>
                    <p class="font-semibold text-black">
                      Jade Sake. Soriano
                    </p>
                    <p class="text-sm text-blue-500">STU 2021-2</p>
                  </div>
                </td>
                <td class="hidden sm:table-cell">BSHRDM - 3E</td>
                <td class="hidden sm:table-cell">2nd year</td>
                <td class="text-green-500">Enrolled</td>
              </tr>
              <tr>
                <td class="flex justify-start items-center">
                  <div
                    class="flex justify-center items-center text-blue-500 font-light w-9 h-9 rounded-full bg-gray-200 mr-3"
                  >
                    PS
                  </div>
                  <div>
                    <p class="font-semibold text-black">
                      Patrick Henry Blake. Samson
                    </p>
                    <p class="text-sm text-blue-500">STU 2021-3</p>
                  </div>
                </td>
                <td class="hidden sm:table-cell">Mangga</td>
                <td class="hidden sm:table-cell">Grade 3</td>
                <td class="text-red-500">Declined</td>
              </tr>
              <tr>
                <td class="flex justify-start items-center">
                  <div
                    class="flex justify-center items-center text-blue-500 font-light w-9 h-9 rounded-full bg-gray-200 mr-3"
                  >
                    RB
                  </div>
                  <div>
                    <p class="font-semibold text-black">
                      Raven Flex. Barrogo
                    </p>
                    <p class="text-sm text-blue-500">STU 2021-4</p>
                  </div>
                </td>
                <td class="hidden sm:table-cell">Jacinto</td>
                <td class="hidden sm:table-cell">Grade 10</td>
                <td class="text-red-500">Declined</td>
              </tr>
              <tr>
                <td class="flex justify-start items-center">
                  <div
                    class="flex justify-center items-center text-blue-500 font-light w-9 h-9 rounded-full bg-gray-200 mr-3"
                  >
                    MP
                  </div>
                  <div>
                    <p class="font-semibold text-black">
                      Mark Lawrence Padding. Parone
                    </p>
                    <p class="text-sm text-blue-500">STU 2021-5</p>
                  </div>
                </td>
                <td class="hidden sm:table-cell">BSIT - 3E</td>
                <td class="hidden sm:table-cell">4th year</td>
                <td class="text-green-500">Enrolled</td>
              </tr>
              <tr>
                <td class="flex justify-start items-center">
                  <div
                    class="flex justify-center items-center text-blue-500 font-light w-9 h-9 rounded-full bg-gray-200 mr-3"
                  >
                    GR
                  </div>
                  <div>
                    <p class="font-semibold text-black">
                      Ginger Flakes. Rañoso
                    </p>
                    <p class="text-sm text-blue-500">STU 2021-6</p>
                  </div>
                </td>
                <td class="hidden sm:table-cell">BSN - 3E</td>
                <td class="hidden sm:table-cell">2nd year</td>
                <td class="text-yellow-500">Pending</td>
              </tr>
            </template>
          </Table>
        </div>
        <!-- PAGINATION -->
        <div class="flex justify-center items-center w-full">
          <button class="text-gray-600 hover:text-blue-500">Prev</button>
          <p class="mx-5 bg-gray-300 px-3 py-1 rounded-lg">1</p>
          <button class="text-gray-600 hover:text-blue-500">Next</button>
        </div>
      </section>
      <section
        class="w-full mt-5 xl:mt-0 xl:w-1/5 bg-white border shadow rounded-xl p-5 space-y-5 overflow-y-auto"
      >
        <div>
          <h1>Recent Enrolled</h1>
          <p class="text-gray-500 font-light">by Student ID:</p>
        </div>
        <ul class="w-full text-sm max-h-80 xl:max-h-104 overflow-y-auto">
          <li class="flex flex-wrap justify-start items-center mb-5">
            <p class="mr-3">STU 2021-1</p>
            <p>BSHRDM - 4A</p>
          </li>
          <li class="flex flex-wrap justify-start items-center mb-5">
            <p class="mr-3">STU 2021-2</p>
            <p>BSIT - 3E</p>
          </li>
          <li class="flex flex-wrap justify-start items-center mb-5">
            <p class="mr-3">STU 2021-3</p>
            <p>Mangga</p>
          </li>
          <li class="flex flex-wrap justify-start items-center mb-5">
            <p class="mr-3">STU 2021-4</p>
            <p>ICT - B</p>
          </li>
          <li class="flex flex-wrap justify-start items-center mb-5">
            <p class="mr-3">STU 2021-5</p>
            <p>BSN - 4A</p>
          </li>
          <li class="flex flex-wrap justify-start items-center mb-5">
            <p class="mr-3">STU 2021-6</p>
            <p>Philippines</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import Cardboard from "@/components/Cardboard";
import Table from "@/components/Table";
export default {
  components: {
    Cardboard,
    Table,
  },
};
</script>

<style></style>
