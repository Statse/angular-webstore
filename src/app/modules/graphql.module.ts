import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GraphqlModule {
  constructor(apolloBoost: ApolloBoost){
    apolloBoost.create({
      uri:'http://jumastore.local/graphql'
    })
  }
}
