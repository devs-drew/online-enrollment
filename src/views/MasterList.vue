<template>
  <div class="w-full">
    <!-- TITLE -->
    <div class="w-full flex justify-between items-center">
      <h1 class="text-xl font-semibold">Master List</h1>
      <div>
        <Button
          primary
          buttonName="Print"
          buttonType="button"
          @customEvent="consoleLog"
        >
          <PrinterIcon class="w-4 h-4" />
        </Button>
      </div>
    </div>

    <!-- MAIN -->
    <div class="w-full auto bg-white shadow border rounded-xl mt-5 p-5">
      <!-- PAGINATION -->
      <div class="flex justify-between items-center">
        <h1 class="text-base font-semibold">Pre-enrolled Table</h1>
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

      <!-- TABS -->
      <div class="flex flex-wrap justify-start items-center my-5">
        <button
          class="bg-gray-300 text-primary font-semibold px-4 py-1 rounded-3xl mb-2"
        >
          All
        </button>
        <button class="text-gray-500 px-4 py-1 rounded-3xl mb-2">
          Enrolled
        </button>
        <button class="text-gray-500 px-4 py-1 rounded-3xl mb-2">
          Pending
        </button>
        <button class="text-gray-500 px-4 py-1 rounded-3xl mb-2">
          Rejected
        </button>
        <button class="text-gray-500 px-4 py-1 rounded-3xl mb-2">
          Expired
        </button>
      </div>

      <div class="w-full flex justify-between items-center">
        <!-- SEARCH -->
        <div class="relative flex items-center">
          <SearchIcon class="absolute left-2 w-5 h-5 text-primary" />
          <input
            class="border-0 shadow-none w-40 pl-10 py-1"
            type="text"
            placeholder="Search..."
          />
        </div>
        <!-- SORTING BY PROGRAM -->
        <div class="flex items-center space-x-5 text-gray-500">
          <p class="hidden sm:block">Program</p>
          <select class="py-1">
            <option>All</option>
            <option>BSIT</option>
            <option>BSN</option>
            <option>BSCS</option>
          </select>
        </div>
      </div>

      <!-- TABLE -->
      <div class="relative w-full max-h-107 border my-5 overflow-y-auto">
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
    </div>
  </div>
</template>

<script>
import { PrinterIcon, SearchIcon } from "@heroicons/vue/outline";
import Table from "@/components/Table";
import Button from "@/components/Button";
export default {
  components: { Table, Button, PrinterIcon, SearchIcon },
  setup() {
    const consoleLog = () => {
      console.log("heya");
    };
    return {
      consoleLog,
    };
  },
};
</script>

<style></style>
