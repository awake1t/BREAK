<script lang="ts" setup>
import BREAK from "@/BREAK";

let providers = Array();
Object.keys(BREAK.abilityProviders).forEach((apKey) => {
  let providerVal =
    BREAK.abilityProviders[apKey as keyof typeof BREAK.abilityProviders];
  let provider = {
    ...providerVal,
    apKey: apKey,
  };
  providers.push(provider);
});
</script>

<template lang="">
  <h3>{{ $t("abilityProviders") }}</h3>
  <el-table :data="providers" border stripe>
    <el-table-column prop="logo" width="150" :label="$t('logo')">
      <template #default="scope">
        <div class="logo">
          <img :src="scope.row.logo" />
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="title" width="120" :label="$t('title')">
      <template #default="scope">
        <a :href="scope.row.site" target="_blank">
          {{
            scope.row.apKey
              ? $t(`BREAK.abilityProviders.${scope.row.apKey}.title`)
              : ""
          }}
        </a>
      </template>
    </el-table-column>
    <el-table-column prop="abilities" :label="$t('supportAbilities')">
      <template #default="scope">
        <span
          class="provider-abilities"
          v-for="(ability, aKey) in scope.row.abilities"
        >
          <a :href="ability.url" target="_blank">{{
            $t(`BREAK.avoidances.${aKey}.title`)
          }}</a>
        </span>
      </template>
    </el-table-column>
    <el-table-column prop="description" :label="$t('description')">
      <template #default="scope">
        {{
          scope.row.apKey
            ? $t(`BREAK.abilityProviders.${scope.row.apKey}.description`)
            : ""
        }}
      </template>
    </el-table-column>
  </el-table>
  <div class="commit-new-provider">
    {{ $t("commitNewProvider") }}:
    <a href="https://github.com/JDArmy/BREAK/issues" target="_blank">
      https://github.com/JDArmy/BREAK/issues
    </a>
  </div>
</template>

<style scoped>
.logo {
  text-align: center;
}
.logo img {
  height: 30px;
  max-width: 120px;
}

.commit-new-provider {
  text-align: center;
  color: grey;
  margin: 50px;
  font-size: 50%;
}

.provider-abilities {
  padding: 10px;
  display: inline-block;
}
.provider-abilities a:hover {
  color: brown;
}
</style>
