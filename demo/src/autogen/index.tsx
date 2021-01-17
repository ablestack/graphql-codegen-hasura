import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  timestamptz: any;
  uuid: any;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Maybe<Scalars['bigint']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Maybe<Scalars['bigint']>>>;
};

/** expression to compare columns of type boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "riders" */
  delete_riders?: Maybe<Riders_Mutation_Response>;
  /** delete data from the table: "tb_cliente" */
  delete_tb_cliente?: Maybe<Tb_Cliente_Mutation_Response>;
  /** delete data from the table: "vehicle" */
  delete_vehicle?: Maybe<Vehicle_Mutation_Response>;
  /** delete data from the table: "vehicle_location" */
  delete_vehicle_location?: Maybe<Vehicle_Location_Mutation_Response>;
  /** insert data into the table: "riders" */
  insert_riders?: Maybe<Riders_Mutation_Response>;
  /** insert data into the table: "tb_cliente" */
  insert_tb_cliente?: Maybe<Tb_Cliente_Mutation_Response>;
  /** insert data into the table: "vehicle" */
  insert_vehicle?: Maybe<Vehicle_Mutation_Response>;
  /** insert data into the table: "vehicle_location" */
  insert_vehicle_location?: Maybe<Vehicle_Location_Mutation_Response>;
  /** update data of the table: "riders" */
  update_riders?: Maybe<Riders_Mutation_Response>;
  /** update data of the table: "tb_cliente" */
  update_tb_cliente?: Maybe<Tb_Cliente_Mutation_Response>;
  /** update data of the table: "vehicle" */
  update_vehicle?: Maybe<Vehicle_Mutation_Response>;
  /** update data of the table: "vehicle_location" */
  update_vehicle_location?: Maybe<Vehicle_Location_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_RidersArgs = {
  where: Riders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tb_ClienteArgs = {
  where: Tb_Cliente_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_VehicleArgs = {
  where: Vehicle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vehicle_LocationArgs = {
  where: Vehicle_Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_RidersArgs = {
  objects: Array<Riders_Insert_Input>;
  on_conflict?: Maybe<Riders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tb_ClienteArgs = {
  objects: Array<Tb_Cliente_Insert_Input>;
  on_conflict?: Maybe<Tb_Cliente_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VehicleArgs = {
  objects: Array<Vehicle_Insert_Input>;
  on_conflict?: Maybe<Vehicle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vehicle_LocationArgs = {
  objects: Array<Vehicle_Location_Insert_Input>;
  on_conflict?: Maybe<Vehicle_Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_RidersArgs = {
  _inc?: Maybe<Riders_Inc_Input>;
  _set?: Maybe<Riders_Set_Input>;
  where: Riders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tb_ClienteArgs = {
  _inc?: Maybe<Tb_Cliente_Inc_Input>;
  _set?: Maybe<Tb_Cliente_Set_Input>;
  where: Tb_Cliente_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_VehicleArgs = {
  _inc?: Maybe<Vehicle_Inc_Input>;
  _set?: Maybe<Vehicle_Set_Input>;
  where: Vehicle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vehicle_LocationArgs = {
  _inc?: Maybe<Vehicle_Location_Inc_Input>;
  _set?: Maybe<Vehicle_Location_Set_Input>;
  where: Vehicle_Location_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "riders" */
  riders: Array<Riders>;
  /** fetch aggregated fields from the table: "riders" */
  riders_aggregate: Riders_Aggregate;
  /** fetch data from the table: "riders" using primary key columns */
  riders_by_pk?: Maybe<Riders>;
  /** fetch data from the table: "tb_cliente" */
  tb_cliente: Array<Tb_Cliente>;
  /** fetch aggregated fields from the table: "tb_cliente" */
  tb_cliente_aggregate: Tb_Cliente_Aggregate;
  /** fetch data from the table: "tb_cliente" using primary key columns */
  tb_cliente_by_pk?: Maybe<Tb_Cliente>;
  /** fetch data from the table: "vehicle" */
  vehicle: Array<Vehicle>;
  /** fetch aggregated fields from the table: "vehicle" */
  vehicle_aggregate: Vehicle_Aggregate;
  /** fetch data from the table: "vehicle" using primary key columns */
  vehicle_by_pk?: Maybe<Vehicle>;
  /** fetch data from the table: "vehicle_location" */
  vehicle_location: Array<Vehicle_Location>;
  /** fetch aggregated fields from the table: "vehicle_location" */
  vehicle_location_aggregate: Vehicle_Location_Aggregate;
  /** fetch data from the table: "vehicle_location" using primary key columns */
  vehicle_location_by_pk?: Maybe<Vehicle_Location>;
};


/** query root */
export type Query_RootRidersArgs = {
  distinct_on?: Maybe<Array<Riders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Riders_Order_By>>;
  where?: Maybe<Riders_Bool_Exp>;
};


/** query root */
export type Query_RootRiders_AggregateArgs = {
  distinct_on?: Maybe<Array<Riders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Riders_Order_By>>;
  where?: Maybe<Riders_Bool_Exp>;
};


/** query root */
export type Query_RootRiders_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTb_ClienteArgs = {
  distinct_on?: Maybe<Array<Tb_Cliente_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tb_Cliente_Order_By>>;
  where?: Maybe<Tb_Cliente_Bool_Exp>;
};


/** query root */
export type Query_RootTb_Cliente_AggregateArgs = {
  distinct_on?: Maybe<Array<Tb_Cliente_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tb_Cliente_Order_By>>;
  where?: Maybe<Tb_Cliente_Bool_Exp>;
};


/** query root */
export type Query_RootTb_Cliente_By_PkArgs = {
  id_cliente: Scalars['bigint'];
};


/** query root */
export type Query_RootVehicleArgs = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Order_By>>;
  where?: Maybe<Vehicle_Bool_Exp>;
};


/** query root */
export type Query_RootVehicle_AggregateArgs = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Order_By>>;
  where?: Maybe<Vehicle_Bool_Exp>;
};


/** query root */
export type Query_RootVehicle_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootVehicle_LocationArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>;
  where?: Maybe<Vehicle_Location_Bool_Exp>;
};


/** query root */
export type Query_RootVehicle_Location_AggregateArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>;
  where?: Maybe<Vehicle_Location_Bool_Exp>;
};


/** query root */
export type Query_RootVehicle_Location_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "riders" */
export type Riders = {
  __typename?: 'riders';
  address: Scalars['String'];
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  phone: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  vehicle_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "riders" */
export type Riders_Aggregate = {
  __typename?: 'riders_aggregate';
  aggregate?: Maybe<Riders_Aggregate_Fields>;
  nodes: Array<Riders>;
};

/** aggregate fields of "riders" */
export type Riders_Aggregate_Fields = {
  __typename?: 'riders_aggregate_fields';
  avg?: Maybe<Riders_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Riders_Max_Fields>;
  min?: Maybe<Riders_Min_Fields>;
  stddev?: Maybe<Riders_Stddev_Fields>;
  stddev_pop?: Maybe<Riders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Riders_Stddev_Samp_Fields>;
  sum?: Maybe<Riders_Sum_Fields>;
  var_pop?: Maybe<Riders_Var_Pop_Fields>;
  var_samp?: Maybe<Riders_Var_Samp_Fields>;
  variance?: Maybe<Riders_Variance_Fields>;
};


/** aggregate fields of "riders" */
export type Riders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Riders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "riders" */
export type Riders_Aggregate_Order_By = {
  avg?: Maybe<Riders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Riders_Max_Order_By>;
  min?: Maybe<Riders_Min_Order_By>;
  stddev?: Maybe<Riders_Stddev_Order_By>;
  stddev_pop?: Maybe<Riders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Riders_Stddev_Samp_Order_By>;
  sum?: Maybe<Riders_Sum_Order_By>;
  var_pop?: Maybe<Riders_Var_Pop_Order_By>;
  var_samp?: Maybe<Riders_Var_Samp_Order_By>;
  variance?: Maybe<Riders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "riders" */
export type Riders_Arr_Rel_Insert_Input = {
  data: Array<Riders_Insert_Input>;
  on_conflict?: Maybe<Riders_On_Conflict>;
};

/** aggregate avg on columns */
export type Riders_Avg_Fields = {
  __typename?: 'riders_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "riders" */
export type Riders_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "riders". All fields are combined with a logical 'AND'. */
export type Riders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Riders_Bool_Exp>>>;
  _not?: Maybe<Riders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Riders_Bool_Exp>>>;
  address?: Maybe<Text_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  phone?: Maybe<Text_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  vehicle_id?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "riders" */
export enum Riders_Constraint {
  /** unique or primary key constraint */
  RidersPkey = 'riders_pkey',
  /** unique or primary key constraint */
  RidersVehicleIdKey = 'riders_vehicle_id_key'
}

/** input type for incrementing integer columne in table "riders" */
export type Riders_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "riders" */
export type Riders_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vehicle_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Riders_Max_Fields = {
  __typename?: 'riders_max_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vehicle_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "riders" */
export type Riders_Max_Order_By = {
  address?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vehicle_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Riders_Min_Fields = {
  __typename?: 'riders_min_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vehicle_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "riders" */
export type Riders_Min_Order_By = {
  address?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vehicle_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "riders" */
export type Riders_Mutation_Response = {
  __typename?: 'riders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Riders>;
};

/** input type for inserting object relation for remote table "riders" */
export type Riders_Obj_Rel_Insert_Input = {
  data: Riders_Insert_Input;
  on_conflict?: Maybe<Riders_On_Conflict>;
};

/** on conflict condition type for table "riders" */
export type Riders_On_Conflict = {
  constraint: Riders_Constraint;
  update_columns: Array<Riders_Update_Column>;
};

/** ordering options when selecting data from "riders" */
export type Riders_Order_By = {
  address?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vehicle_id?: Maybe<Order_By>;
};

/** select columns of table "riders" */
export enum Riders_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleId = 'vehicle_id'
}

/** input type for updating data in table "riders" */
export type Riders_Set_Input = {
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vehicle_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Riders_Stddev_Fields = {
  __typename?: 'riders_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "riders" */
export type Riders_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Riders_Stddev_Pop_Fields = {
  __typename?: 'riders_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "riders" */
export type Riders_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Riders_Stddev_Samp_Fields = {
  __typename?: 'riders_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "riders" */
export type Riders_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Riders_Sum_Fields = {
  __typename?: 'riders_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "riders" */
export type Riders_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "riders" */
export enum Riders_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleId = 'vehicle_id'
}

/** aggregate var_pop on columns */
export type Riders_Var_Pop_Fields = {
  __typename?: 'riders_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "riders" */
export type Riders_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Riders_Var_Samp_Fields = {
  __typename?: 'riders_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "riders" */
export type Riders_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Riders_Variance_Fields = {
  __typename?: 'riders_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "riders" */
export type Riders_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "riders" */
  riders: Array<Riders>;
  /** fetch aggregated fields from the table: "riders" */
  riders_aggregate: Riders_Aggregate;
  /** fetch data from the table: "riders" using primary key columns */
  riders_by_pk?: Maybe<Riders>;
  /** fetch data from the table: "tb_cliente" */
  tb_cliente: Array<Tb_Cliente>;
  /** fetch aggregated fields from the table: "tb_cliente" */
  tb_cliente_aggregate: Tb_Cliente_Aggregate;
  /** fetch data from the table: "tb_cliente" using primary key columns */
  tb_cliente_by_pk?: Maybe<Tb_Cliente>;
  /** fetch data from the table: "vehicle" */
  vehicle: Array<Vehicle>;
  /** fetch aggregated fields from the table: "vehicle" */
  vehicle_aggregate: Vehicle_Aggregate;
  /** fetch data from the table: "vehicle" using primary key columns */
  vehicle_by_pk?: Maybe<Vehicle>;
  /** fetch data from the table: "vehicle_location" */
  vehicle_location: Array<Vehicle_Location>;
  /** fetch aggregated fields from the table: "vehicle_location" */
  vehicle_location_aggregate: Vehicle_Location_Aggregate;
  /** fetch data from the table: "vehicle_location" using primary key columns */
  vehicle_location_by_pk?: Maybe<Vehicle_Location>;
};


/** subscription root */
export type Subscription_RootRidersArgs = {
  distinct_on?: Maybe<Array<Riders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Riders_Order_By>>;
  where?: Maybe<Riders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRiders_AggregateArgs = {
  distinct_on?: Maybe<Array<Riders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Riders_Order_By>>;
  where?: Maybe<Riders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRiders_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTb_ClienteArgs = {
  distinct_on?: Maybe<Array<Tb_Cliente_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tb_Cliente_Order_By>>;
  where?: Maybe<Tb_Cliente_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTb_Cliente_AggregateArgs = {
  distinct_on?: Maybe<Array<Tb_Cliente_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tb_Cliente_Order_By>>;
  where?: Maybe<Tb_Cliente_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTb_Cliente_By_PkArgs = {
  id_cliente: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootVehicleArgs = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Order_By>>;
  where?: Maybe<Vehicle_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVehicle_AggregateArgs = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Order_By>>;
  where?: Maybe<Vehicle_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVehicle_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootVehicle_LocationArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>;
  where?: Maybe<Vehicle_Location_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVehicle_Location_AggregateArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>;
  where?: Maybe<Vehicle_Location_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVehicle_Location_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "tb_cliente" */
export type Tb_Cliente = {
  __typename?: 'tb_cliente';
  email: Scalars['String'];
  id_cliente: Scalars['bigint'];
  identificador: Scalars['uuid'];
  nome: Scalars['String'];
  status: Scalars['Int'];
};

/** aggregated selection of "tb_cliente" */
export type Tb_Cliente_Aggregate = {
  __typename?: 'tb_cliente_aggregate';
  aggregate?: Maybe<Tb_Cliente_Aggregate_Fields>;
  nodes: Array<Tb_Cliente>;
};

/** aggregate fields of "tb_cliente" */
export type Tb_Cliente_Aggregate_Fields = {
  __typename?: 'tb_cliente_aggregate_fields';
  avg?: Maybe<Tb_Cliente_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tb_Cliente_Max_Fields>;
  min?: Maybe<Tb_Cliente_Min_Fields>;
  stddev?: Maybe<Tb_Cliente_Stddev_Fields>;
  stddev_pop?: Maybe<Tb_Cliente_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tb_Cliente_Stddev_Samp_Fields>;
  sum?: Maybe<Tb_Cliente_Sum_Fields>;
  var_pop?: Maybe<Tb_Cliente_Var_Pop_Fields>;
  var_samp?: Maybe<Tb_Cliente_Var_Samp_Fields>;
  variance?: Maybe<Tb_Cliente_Variance_Fields>;
};


/** aggregate fields of "tb_cliente" */
export type Tb_Cliente_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tb_Cliente_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tb_cliente" */
export type Tb_Cliente_Aggregate_Order_By = {
  avg?: Maybe<Tb_Cliente_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tb_Cliente_Max_Order_By>;
  min?: Maybe<Tb_Cliente_Min_Order_By>;
  stddev?: Maybe<Tb_Cliente_Stddev_Order_By>;
  stddev_pop?: Maybe<Tb_Cliente_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tb_Cliente_Stddev_Samp_Order_By>;
  sum?: Maybe<Tb_Cliente_Sum_Order_By>;
  var_pop?: Maybe<Tb_Cliente_Var_Pop_Order_By>;
  var_samp?: Maybe<Tb_Cliente_Var_Samp_Order_By>;
  variance?: Maybe<Tb_Cliente_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tb_cliente" */
export type Tb_Cliente_Arr_Rel_Insert_Input = {
  data: Array<Tb_Cliente_Insert_Input>;
  on_conflict?: Maybe<Tb_Cliente_On_Conflict>;
};

/** aggregate avg on columns */
export type Tb_Cliente_Avg_Fields = {
  __typename?: 'tb_cliente_avg_fields';
  id_cliente?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tb_cliente" */
export type Tb_Cliente_Avg_Order_By = {
  id_cliente?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tb_cliente". All fields are combined with a logical 'AND'. */
export type Tb_Cliente_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tb_Cliente_Bool_Exp>>>;
  _not?: Maybe<Tb_Cliente_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tb_Cliente_Bool_Exp>>>;
  email?: Maybe<Varchar_Comparison_Exp>;
  id_cliente?: Maybe<Bigint_Comparison_Exp>;
  identificador?: Maybe<Uuid_Comparison_Exp>;
  nome?: Maybe<Varchar_Comparison_Exp>;
  status?: Maybe<Integer_Comparison_Exp>;
};

/** unique or primary key constraints on table "tb_cliente" */
export enum Tb_Cliente_Constraint {
  /** unique or primary key constraint */
  TbClienteEmailKey = 'tb_cliente_email_key',
  /** unique or primary key constraint */
  TbClienteIdentificadorKey = 'tb_cliente_identificador_key',
  /** unique or primary key constraint */
  TbClientePkey = 'tb_cliente_pkey'
}

/** input type for incrementing integer columne in table "tb_cliente" */
export type Tb_Cliente_Inc_Input = {
  id_cliente?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tb_cliente" */
export type Tb_Cliente_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id_cliente?: Maybe<Scalars['bigint']>;
  identificador?: Maybe<Scalars['uuid']>;
  nome?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Tb_Cliente_Max_Fields = {
  __typename?: 'tb_cliente_max_fields';
  email?: Maybe<Scalars['String']>;
  id_cliente?: Maybe<Scalars['bigint']>;
  nome?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "tb_cliente" */
export type Tb_Cliente_Max_Order_By = {
  email?: Maybe<Order_By>;
  id_cliente?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tb_Cliente_Min_Fields = {
  __typename?: 'tb_cliente_min_fields';
  email?: Maybe<Scalars['String']>;
  id_cliente?: Maybe<Scalars['bigint']>;
  nome?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "tb_cliente" */
export type Tb_Cliente_Min_Order_By = {
  email?: Maybe<Order_By>;
  id_cliente?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** response of any mutation on the table "tb_cliente" */
export type Tb_Cliente_Mutation_Response = {
  __typename?: 'tb_cliente_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tb_Cliente>;
};

/** input type for inserting object relation for remote table "tb_cliente" */
export type Tb_Cliente_Obj_Rel_Insert_Input = {
  data: Tb_Cliente_Insert_Input;
  on_conflict?: Maybe<Tb_Cliente_On_Conflict>;
};

/** on conflict condition type for table "tb_cliente" */
export type Tb_Cliente_On_Conflict = {
  constraint: Tb_Cliente_Constraint;
  update_columns: Array<Tb_Cliente_Update_Column>;
};

/** ordering options when selecting data from "tb_cliente" */
export type Tb_Cliente_Order_By = {
  email?: Maybe<Order_By>;
  id_cliente?: Maybe<Order_By>;
  identificador?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** select columns of table "tb_cliente" */
export enum Tb_Cliente_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  IdCliente = 'id_cliente',
  /** column name */
  Identificador = 'identificador',
  /** column name */
  Nome = 'nome',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "tb_cliente" */
export type Tb_Cliente_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id_cliente?: Maybe<Scalars['bigint']>;
  identificador?: Maybe<Scalars['uuid']>;
  nome?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Tb_Cliente_Stddev_Fields = {
  __typename?: 'tb_cliente_stddev_fields';
  id_cliente?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tb_cliente" */
export type Tb_Cliente_Stddev_Order_By = {
  id_cliente?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tb_Cliente_Stddev_Pop_Fields = {
  __typename?: 'tb_cliente_stddev_pop_fields';
  id_cliente?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tb_cliente" */
export type Tb_Cliente_Stddev_Pop_Order_By = {
  id_cliente?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tb_Cliente_Stddev_Samp_Fields = {
  __typename?: 'tb_cliente_stddev_samp_fields';
  id_cliente?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tb_cliente" */
export type Tb_Cliente_Stddev_Samp_Order_By = {
  id_cliente?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tb_Cliente_Sum_Fields = {
  __typename?: 'tb_cliente_sum_fields';
  id_cliente?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tb_cliente" */
export type Tb_Cliente_Sum_Order_By = {
  id_cliente?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** update columns of table "tb_cliente" */
export enum Tb_Cliente_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  IdCliente = 'id_cliente',
  /** column name */
  Identificador = 'identificador',
  /** column name */
  Nome = 'nome',
  /** column name */
  Status = 'status'
}

/** aggregate var_pop on columns */
export type Tb_Cliente_Var_Pop_Fields = {
  __typename?: 'tb_cliente_var_pop_fields';
  id_cliente?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tb_cliente" */
export type Tb_Cliente_Var_Pop_Order_By = {
  id_cliente?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tb_Cliente_Var_Samp_Fields = {
  __typename?: 'tb_cliente_var_samp_fields';
  id_cliente?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tb_cliente" */
export type Tb_Cliente_Var_Samp_Order_By = {
  id_cliente?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tb_Cliente_Variance_Fields = {
  __typename?: 'tb_cliente_variance_fields';
  id_cliente?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tb_cliente" */
export type Tb_Cliente_Variance_Order_By = {
  id_cliente?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Maybe<Scalars['timestamptz']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Maybe<Scalars['timestamptz']>>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Maybe<Scalars['uuid']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Maybe<Scalars['uuid']>>>;
};

/** expression to compare columns of type varchar. All fields are combined with logical 'AND'. */
export type Varchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "vehicle" */
export type Vehicle = {
  __typename?: 'vehicle';
  id: Scalars['String'];
  /** An array relationship */
  locations: Array<Vehicle_Location>;
  /** An aggregated array relationship */
  locations_aggregate: Vehicle_Location_Aggregate;
  name: Scalars['String'];
  yrdy: Scalars['Int'];
};


/** columns and relationships of "vehicle" */
export type VehicleLocationsArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>;
  where?: Maybe<Vehicle_Location_Bool_Exp>;
};


/** columns and relationships of "vehicle" */
export type VehicleLocations_AggregateArgs = {
  distinct_on?: Maybe<Array<Vehicle_Location_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Location_Order_By>>;
  where?: Maybe<Vehicle_Location_Bool_Exp>;
};

/** aggregated selection of "vehicle" */
export type Vehicle_Aggregate = {
  __typename?: 'vehicle_aggregate';
  aggregate?: Maybe<Vehicle_Aggregate_Fields>;
  nodes: Array<Vehicle>;
};

/** aggregate fields of "vehicle" */
export type Vehicle_Aggregate_Fields = {
  __typename?: 'vehicle_aggregate_fields';
  avg?: Maybe<Vehicle_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vehicle_Max_Fields>;
  min?: Maybe<Vehicle_Min_Fields>;
  stddev?: Maybe<Vehicle_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Variance_Fields>;
};


/** aggregate fields of "vehicle" */
export type Vehicle_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vehicle_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vehicle" */
export type Vehicle_Aggregate_Order_By = {
  avg?: Maybe<Vehicle_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vehicle_Max_Order_By>;
  min?: Maybe<Vehicle_Min_Order_By>;
  stddev?: Maybe<Vehicle_Stddev_Order_By>;
  stddev_pop?: Maybe<Vehicle_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vehicle_Stddev_Samp_Order_By>;
  sum?: Maybe<Vehicle_Sum_Order_By>;
  var_pop?: Maybe<Vehicle_Var_Pop_Order_By>;
  var_samp?: Maybe<Vehicle_Var_Samp_Order_By>;
  variance?: Maybe<Vehicle_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vehicle" */
export type Vehicle_Arr_Rel_Insert_Input = {
  data: Array<Vehicle_Insert_Input>;
  on_conflict?: Maybe<Vehicle_On_Conflict>;
};

/** aggregate avg on columns */
export type Vehicle_Avg_Fields = {
  __typename?: 'vehicle_avg_fields';
  yrdy?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vehicle" */
export type Vehicle_Avg_Order_By = {
  yrdy?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicle". All fields are combined with a logical 'AND'. */
export type Vehicle_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vehicle_Bool_Exp>>>;
  _not?: Maybe<Vehicle_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vehicle_Bool_Exp>>>;
  id?: Maybe<Text_Comparison_Exp>;
  locations?: Maybe<Vehicle_Location_Bool_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  yrdy?: Maybe<Integer_Comparison_Exp>;
};

/** unique or primary key constraints on table "vehicle" */
export enum Vehicle_Constraint {
  /** unique or primary key constraint */
  VehiclePkey = 'vehicle_pkey'
}

/** input type for incrementing integer columne in table "vehicle" */
export type Vehicle_Inc_Input = {
  yrdy?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "vehicle" */
export type Vehicle_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  locations?: Maybe<Vehicle_Location_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  yrdy?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "vehicle_location" */
export type Vehicle_Location = {
  __typename?: 'vehicle_location';
  id: Scalars['Int'];
  location: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  vehicle_id: Scalars['String'];
};

/** aggregated selection of "vehicle_location" */
export type Vehicle_Location_Aggregate = {
  __typename?: 'vehicle_location_aggregate';
  aggregate?: Maybe<Vehicle_Location_Aggregate_Fields>;
  nodes: Array<Vehicle_Location>;
};

/** aggregate fields of "vehicle_location" */
export type Vehicle_Location_Aggregate_Fields = {
  __typename?: 'vehicle_location_aggregate_fields';
  avg?: Maybe<Vehicle_Location_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vehicle_Location_Max_Fields>;
  min?: Maybe<Vehicle_Location_Min_Fields>;
  stddev?: Maybe<Vehicle_Location_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Location_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Location_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Location_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Location_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Location_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Location_Variance_Fields>;
};


/** aggregate fields of "vehicle_location" */
export type Vehicle_Location_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vehicle_Location_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vehicle_location" */
export type Vehicle_Location_Aggregate_Order_By = {
  avg?: Maybe<Vehicle_Location_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vehicle_Location_Max_Order_By>;
  min?: Maybe<Vehicle_Location_Min_Order_By>;
  stddev?: Maybe<Vehicle_Location_Stddev_Order_By>;
  stddev_pop?: Maybe<Vehicle_Location_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vehicle_Location_Stddev_Samp_Order_By>;
  sum?: Maybe<Vehicle_Location_Sum_Order_By>;
  var_pop?: Maybe<Vehicle_Location_Var_Pop_Order_By>;
  var_samp?: Maybe<Vehicle_Location_Var_Samp_Order_By>;
  variance?: Maybe<Vehicle_Location_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vehicle_location" */
export type Vehicle_Location_Arr_Rel_Insert_Input = {
  data: Array<Vehicle_Location_Insert_Input>;
  on_conflict?: Maybe<Vehicle_Location_On_Conflict>;
};

/** aggregate avg on columns */
export type Vehicle_Location_Avg_Fields = {
  __typename?: 'vehicle_location_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vehicle_location" */
export type Vehicle_Location_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicle_location". All fields are combined with a logical 'AND'. */
export type Vehicle_Location_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vehicle_Location_Bool_Exp>>>;
  _not?: Maybe<Vehicle_Location_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vehicle_Location_Bool_Exp>>>;
  id?: Maybe<Integer_Comparison_Exp>;
  location?: Maybe<Text_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  vehicle_id?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "vehicle_location" */
export enum Vehicle_Location_Constraint {
  /** unique or primary key constraint */
  VehicleLocationPkey = 'vehicle_location_pkey'
}

/** input type for incrementing integer columne in table "vehicle_location" */
export type Vehicle_Location_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "vehicle_location" */
export type Vehicle_Location_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  vehicle_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Vehicle_Location_Max_Fields = {
  __typename?: 'vehicle_location_max_fields';
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  vehicle_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vehicle_location" */
export type Vehicle_Location_Max_Order_By = {
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  vehicle_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vehicle_Location_Min_Fields = {
  __typename?: 'vehicle_location_min_fields';
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  vehicle_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vehicle_location" */
export type Vehicle_Location_Min_Order_By = {
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  vehicle_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "vehicle_location" */
export type Vehicle_Location_Mutation_Response = {
  __typename?: 'vehicle_location_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Vehicle_Location>;
};

/** input type for inserting object relation for remote table "vehicle_location" */
export type Vehicle_Location_Obj_Rel_Insert_Input = {
  data: Vehicle_Location_Insert_Input;
  on_conflict?: Maybe<Vehicle_Location_On_Conflict>;
};

/** on conflict condition type for table "vehicle_location" */
export type Vehicle_Location_On_Conflict = {
  constraint: Vehicle_Location_Constraint;
  update_columns: Array<Vehicle_Location_Update_Column>;
};

/** ordering options when selecting data from "vehicle_location" */
export type Vehicle_Location_Order_By = {
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  vehicle_id?: Maybe<Order_By>;
};

/** select columns of table "vehicle_location" */
export enum Vehicle_Location_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VehicleId = 'vehicle_id'
}

/** input type for updating data in table "vehicle_location" */
export type Vehicle_Location_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  vehicle_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Vehicle_Location_Stddev_Fields = {
  __typename?: 'vehicle_location_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vehicle_location" */
export type Vehicle_Location_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Location_Stddev_Pop_Fields = {
  __typename?: 'vehicle_location_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vehicle_location" */
export type Vehicle_Location_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Location_Stddev_Samp_Fields = {
  __typename?: 'vehicle_location_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vehicle_location" */
export type Vehicle_Location_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vehicle_Location_Sum_Fields = {
  __typename?: 'vehicle_location_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vehicle_location" */
export type Vehicle_Location_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "vehicle_location" */
export enum Vehicle_Location_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VehicleId = 'vehicle_id'
}

/** aggregate var_pop on columns */
export type Vehicle_Location_Var_Pop_Fields = {
  __typename?: 'vehicle_location_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vehicle_location" */
export type Vehicle_Location_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vehicle_Location_Var_Samp_Fields = {
  __typename?: 'vehicle_location_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vehicle_location" */
export type Vehicle_Location_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vehicle_Location_Variance_Fields = {
  __typename?: 'vehicle_location_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vehicle_location" */
export type Vehicle_Location_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Vehicle_Max_Fields = {
  __typename?: 'vehicle_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  yrdy?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vehicle" */
export type Vehicle_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  yrdy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vehicle_Min_Fields = {
  __typename?: 'vehicle_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  yrdy?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vehicle" */
export type Vehicle_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  yrdy?: Maybe<Order_By>;
};

/** response of any mutation on the table "vehicle" */
export type Vehicle_Mutation_Response = {
  __typename?: 'vehicle_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Vehicle>;
};

/** input type for inserting object relation for remote table "vehicle" */
export type Vehicle_Obj_Rel_Insert_Input = {
  data: Vehicle_Insert_Input;
  on_conflict?: Maybe<Vehicle_On_Conflict>;
};

/** on conflict condition type for table "vehicle" */
export type Vehicle_On_Conflict = {
  constraint: Vehicle_Constraint;
  update_columns: Array<Vehicle_Update_Column>;
};

/** ordering options when selecting data from "vehicle" */
export type Vehicle_Order_By = {
  id?: Maybe<Order_By>;
  locations_aggregate?: Maybe<Vehicle_Location_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  yrdy?: Maybe<Order_By>;
};

/** select columns of table "vehicle" */
export enum Vehicle_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Yrdy = 'yrdy'
}

/** input type for updating data in table "vehicle" */
export type Vehicle_Set_Input = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  yrdy?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Vehicle_Stddev_Fields = {
  __typename?: 'vehicle_stddev_fields';
  yrdy?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vehicle" */
export type Vehicle_Stddev_Order_By = {
  yrdy?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Stddev_Pop_Fields = {
  __typename?: 'vehicle_stddev_pop_fields';
  yrdy?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vehicle" */
export type Vehicle_Stddev_Pop_Order_By = {
  yrdy?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Stddev_Samp_Fields = {
  __typename?: 'vehicle_stddev_samp_fields';
  yrdy?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vehicle" */
export type Vehicle_Stddev_Samp_Order_By = {
  yrdy?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vehicle_Sum_Fields = {
  __typename?: 'vehicle_sum_fields';
  yrdy?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vehicle" */
export type Vehicle_Sum_Order_By = {
  yrdy?: Maybe<Order_By>;
};

/** update columns of table "vehicle" */
export enum Vehicle_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Yrdy = 'yrdy'
}

/** aggregate var_pop on columns */
export type Vehicle_Var_Pop_Fields = {
  __typename?: 'vehicle_var_pop_fields';
  yrdy?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vehicle" */
export type Vehicle_Var_Pop_Order_By = {
  yrdy?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vehicle_Var_Samp_Fields = {
  __typename?: 'vehicle_var_samp_fields';
  yrdy?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vehicle" */
export type Vehicle_Var_Samp_Order_By = {
  yrdy?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vehicle_Variance_Fields = {
  __typename?: 'vehicle_variance_fields';
  yrdy?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vehicle" */
export type Vehicle_Variance_Order_By = {
  yrdy?: Maybe<Order_By>;
};

export type QueryVehicleByIdQueryVariables = {
  vehicleId: Scalars['String'];
};


export type QueryVehicleByIdQuery = (
  { __typename?: 'query_root' }
  & { vehicle_by_pk?: Maybe<(
    { __typename?: 'vehicle' }
    & VehicleFragment
  )> }
);

export type QueryVehicleObjectsQueryVariables = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>;
  where?: Maybe<Vehicle_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Order_By>>;
};


export type QueryVehicleObjectsQuery = (
  { __typename?: 'query_root' }
  & { vehicle: Array<(
    { __typename?: 'vehicle' }
    & VehicleFragment
  )> }
);

export type SubscribeToVehicleByIdSubscriptionVariables = {
  vehicleId: Scalars['String'];
};


export type SubscribeToVehicleByIdSubscription = (
  { __typename?: 'subscription_root' }
  & { vehicle_by_pk?: Maybe<(
    { __typename?: 'vehicle' }
    & VehicleFragment
  )> }
);

export type SubscribeToVehicleObjectsSubscriptionVariables = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>;
  where?: Maybe<Vehicle_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Order_By>>;
};


export type SubscribeToVehicleObjectsSubscription = (
  { __typename?: 'subscription_root' }
  & { vehicle: Array<(
    { __typename?: 'vehicle' }
    & VehicleFragment
  )> }
);

export type InsertVehicleMutationVariables = {
  objects: Array<Vehicle_Insert_Input>;
};


export type InsertVehicleMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vehicle?: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleFragment
    )> }
  )> }
);

export type InsertVehicleWithOnConflictMutationVariables = {
  objects: Array<Vehicle_Insert_Input>;
  onConflict?: Maybe<Vehicle_On_Conflict>;
};


export type InsertVehicleWithOnConflictMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vehicle?: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleFragment
    )> }
  )> }
);

export type UpdateVehicleByIdMutationVariables = {
  id?: Maybe<Scalars['String']>;
  set?: Maybe<Vehicle_Set_Input>;
};


export type UpdateVehicleByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle?: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleFragment
    )> }
  )> }
);

export type UpdateVehicleMutationVariables = {
  set?: Maybe<Vehicle_Set_Input>;
  where: Vehicle_Bool_Exp;
};


export type UpdateVehicleMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle?: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleFragment
    )> }
  )> }
);

export type RemoveVehicleModelByIdMutationVariables = {
  id?: Maybe<Scalars['String']>;
};


export type RemoveVehicleModelByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_vehicle?: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemoveVehicleModelMutationVariables = {
  where: Vehicle_Bool_Exp;
};


export type RemoveVehicleModelMutation = (
  { __typename?: 'mutation_root' }
  & { delete_vehicle?: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
  )> }
);

export type QueryVehicleLocationOnlyByIdQueryVariables = {
  vehicleId: Scalars['String'];
};


export type QueryVehicleLocationOnlyByIdQuery = (
  { __typename?: 'query_root' }
  & { vehicle_by_pk?: Maybe<(
    { __typename?: 'vehicle' }
    & VehicleLocationOnlyFragment
  )> }
);

export type QueryVehicleLocationOnlyObjectsQueryVariables = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>;
  where?: Maybe<Vehicle_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Order_By>>;
};


export type QueryVehicleLocationOnlyObjectsQuery = (
  { __typename?: 'query_root' }
  & { vehicle: Array<(
    { __typename?: 'vehicle' }
    & VehicleLocationOnlyFragment
  )> }
);

export type SubscribeToVehicleLocationOnlyByIdSubscriptionVariables = {
  vehicleId: Scalars['String'];
};


export type SubscribeToVehicleLocationOnlyByIdSubscription = (
  { __typename?: 'subscription_root' }
  & { vehicle_by_pk?: Maybe<(
    { __typename?: 'vehicle' }
    & VehicleLocationOnlyFragment
  )> }
);

export type SubscribeToVehicleLocationOnlyObjectsSubscriptionVariables = {
  distinct_on?: Maybe<Array<Vehicle_Select_Column>>;
  where?: Maybe<Vehicle_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vehicle_Order_By>>;
};


export type SubscribeToVehicleLocationOnlyObjectsSubscription = (
  { __typename?: 'subscription_root' }
  & { vehicle: Array<(
    { __typename?: 'vehicle' }
    & VehicleLocationOnlyFragment
  )> }
);

export type InsertVehicleLocationOnlyMutationVariables = {
  objects: Array<Vehicle_Insert_Input>;
};


export type InsertVehicleLocationOnlyMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vehicle?: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleLocationOnlyFragment
    )> }
  )> }
);

export type InsertVehicleLocationOnlyWithOnConflictMutationVariables = {
  objects: Array<Vehicle_Insert_Input>;
  onConflict?: Maybe<Vehicle_On_Conflict>;
};


export type InsertVehicleLocationOnlyWithOnConflictMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vehicle?: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleLocationOnlyFragment
    )> }
  )> }
);

export type UpdateVehicleLocationOnlyByIdMutationVariables = {
  id?: Maybe<Scalars['String']>;
  set?: Maybe<Vehicle_Set_Input>;
};


export type UpdateVehicleLocationOnlyByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle?: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleLocationOnlyFragment
    )> }
  )> }
);

export type UpdateVehicleLocationOnlyMutationVariables = {
  set?: Maybe<Vehicle_Set_Input>;
  where: Vehicle_Bool_Exp;
};


export type UpdateVehicleLocationOnlyMutation = (
  { __typename?: 'mutation_root' }
  & { update_vehicle?: Maybe<(
    { __typename?: 'vehicle_mutation_response' }
    & Pick<Vehicle_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'vehicle' }
      & VehicleLocationOnlyFragment
    )> }
  )> }
);

export type VehicleFragment = (
  { __typename?: 'vehicle' }
  & Pick<Vehicle, 'id' | 'name'>
  & { locations: Array<(
    { __typename?: 'vehicle_location' }
    & Pick<Vehicle_Location, 'location'>
  )> }
);

export type VehicleLocationOnlyFragment = (
  { __typename?: 'vehicle' }
  & Pick<Vehicle, 'id'>
  & { locations: Array<(
    { __typename?: 'vehicle_location' }
    & Pick<Vehicle_Location, 'location'>
  )> }
);

export const VehicleFragmentDoc = gql`
    fragment Vehicle on vehicle {
  id
  name
  locations {
    location
  }
}
    `;
export const VehicleLocationOnlyFragmentDoc = gql`
    fragment VehicleLocationOnly on vehicle {
  id
  locations {
    location
  }
}
    `;
export const QueryVehicleByIdDocument = gql`
    query queryVehicleById($vehicleId: String!) {
  vehicle_by_pk(id: $vehicleId) {
    ...Vehicle
  }
}
    ${VehicleFragmentDoc}`;
export type QueryVehicleByIdQueryResult = ApolloReactCommon.QueryResult<QueryVehicleByIdQuery, QueryVehicleByIdQueryVariables>;
export const QueryVehicleObjectsDocument = gql`
    query queryVehicleObjects($distinct_on: [vehicle_select_column!], $where: vehicle_bool_exp, $limit: Int, $offset: Int, $order_by: [vehicle_order_by!]) {
  vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...Vehicle
  }
}
    ${VehicleFragmentDoc}`;
export type QueryVehicleObjectsQueryResult = ApolloReactCommon.QueryResult<QueryVehicleObjectsQuery, QueryVehicleObjectsQueryVariables>;
export const SubscribeToVehicleByIdDocument = gql`
    subscription subscribeToVehicleById($vehicleId: String!) {
  vehicle_by_pk(id: $vehicleId) {
    ...Vehicle
  }
}
    ${VehicleFragmentDoc}`;
export type SubscribeToVehicleByIdSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToVehicleByIdSubscription>;
export const SubscribeToVehicleObjectsDocument = gql`
    subscription subscribeToVehicleObjects($distinct_on: [vehicle_select_column!], $where: vehicle_bool_exp, $limit: Int, $offset: Int, $order_by: [vehicle_order_by!]) {
  vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...Vehicle
  }
}
    ${VehicleFragmentDoc}`;
export type SubscribeToVehicleObjectsSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToVehicleObjectsSubscription>;
export const InsertVehicleDocument = gql`
    mutation insertVehicle($objects: [vehicle_insert_input!]!) {
  insert_vehicle(objects: $objects) {
    affected_rows
    returning {
      ...Vehicle
    }
  }
}
    ${VehicleFragmentDoc}`;
export type InsertVehicleMutationFn = ApolloReactCommon.MutationFunction<InsertVehicleMutation, InsertVehicleMutationVariables>;
export type InsertVehicleMutationResult = ApolloReactCommon.MutationResult<InsertVehicleMutation>;
export type InsertVehicleMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables>;
export const InsertVehicleWithOnConflictDocument = gql`
    mutation insertVehicleWithOnConflict($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
  insert_vehicle(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...Vehicle
    }
  }
}
    ${VehicleFragmentDoc}`;
export type InsertVehicleWithOnConflictMutationFn = ApolloReactCommon.MutationFunction<InsertVehicleWithOnConflictMutation, InsertVehicleWithOnConflictMutationVariables>;
export type InsertVehicleWithOnConflictMutationResult = ApolloReactCommon.MutationResult<InsertVehicleWithOnConflictMutation>;
export type InsertVehicleWithOnConflictMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertVehicleWithOnConflictMutation, InsertVehicleWithOnConflictMutationVariables>;
export const UpdateVehicleByIdDocument = gql`
    mutation updateVehicleById($id: String, $set: vehicle_set_input) {
  update_vehicle(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...Vehicle
    }
  }
}
    ${VehicleFragmentDoc}`;
export type UpdateVehicleByIdMutationFn = ApolloReactCommon.MutationFunction<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>;
export type UpdateVehicleByIdMutationResult = ApolloReactCommon.MutationResult<UpdateVehicleByIdMutation>;
export type UpdateVehicleByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>;
export const UpdateVehicleDocument = gql`
    mutation updateVehicle($set: vehicle_set_input, $where: vehicle_bool_exp!) {
  update_vehicle(_set: $set, where: $where) {
    affected_rows
    returning {
      ...Vehicle
    }
  }
}
    ${VehicleFragmentDoc}`;
export type UpdateVehicleMutationFn = ApolloReactCommon.MutationFunction<UpdateVehicleMutation, UpdateVehicleMutationVariables>;
export type UpdateVehicleMutationResult = ApolloReactCommon.MutationResult<UpdateVehicleMutation>;
export type UpdateVehicleMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>;
export const RemoveVehicleModelByIdDocument = gql`
    mutation removeVehicleModelById($id: String) {
  delete_vehicle(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type RemoveVehicleModelByIdMutationFn = ApolloReactCommon.MutationFunction<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>;
export type RemoveVehicleModelByIdMutationResult = ApolloReactCommon.MutationResult<RemoveVehicleModelByIdMutation>;
export type RemoveVehicleModelByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>;
export const RemoveVehicleModelDocument = gql`
    mutation removeVehicleModel($where: vehicle_bool_exp!) {
  delete_vehicle(where: $where) {
    affected_rows
  }
}
    `;
export type RemoveVehicleModelMutationFn = ApolloReactCommon.MutationFunction<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>;
export type RemoveVehicleModelMutationResult = ApolloReactCommon.MutationResult<RemoveVehicleModelMutation>;
export type RemoveVehicleModelMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>;
export const QueryVehicleLocationOnlyByIdDocument = gql`
    query queryVehicleLocationOnlyById($vehicleId: String!) {
  vehicle_by_pk(id: $vehicleId) {
    ...VehicleLocationOnly
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type QueryVehicleLocationOnlyByIdQueryResult = ApolloReactCommon.QueryResult<QueryVehicleLocationOnlyByIdQuery, QueryVehicleLocationOnlyByIdQueryVariables>;
export const QueryVehicleLocationOnlyObjectsDocument = gql`
    query queryVehicleLocationOnlyObjects($distinct_on: [vehicle_select_column!], $where: vehicle_bool_exp, $limit: Int, $offset: Int, $order_by: [vehicle_order_by!]) {
  vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...VehicleLocationOnly
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type QueryVehicleLocationOnlyObjectsQueryResult = ApolloReactCommon.QueryResult<QueryVehicleLocationOnlyObjectsQuery, QueryVehicleLocationOnlyObjectsQueryVariables>;
export const SubscribeToVehicleLocationOnlyByIdDocument = gql`
    subscription subscribeToVehicleLocationOnlyById($vehicleId: String!) {
  vehicle_by_pk(id: $vehicleId) {
    ...VehicleLocationOnly
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type SubscribeToVehicleLocationOnlyByIdSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToVehicleLocationOnlyByIdSubscription>;
export const SubscribeToVehicleLocationOnlyObjectsDocument = gql`
    subscription subscribeToVehicleLocationOnlyObjects($distinct_on: [vehicle_select_column!], $where: vehicle_bool_exp, $limit: Int, $offset: Int, $order_by: [vehicle_order_by!]) {
  vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    ...VehicleLocationOnly
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type SubscribeToVehicleLocationOnlyObjectsSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToVehicleLocationOnlyObjectsSubscription>;
export const InsertVehicleLocationOnlyDocument = gql`
    mutation insertVehicleLocationOnly($objects: [vehicle_insert_input!]!) {
  insert_vehicle(objects: $objects) {
    affected_rows
    returning {
      ...VehicleLocationOnly
    }
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type InsertVehicleLocationOnlyMutationFn = ApolloReactCommon.MutationFunction<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>;
export type InsertVehicleLocationOnlyMutationResult = ApolloReactCommon.MutationResult<InsertVehicleLocationOnlyMutation>;
export type InsertVehicleLocationOnlyMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>;
export const InsertVehicleLocationOnlyWithOnConflictDocument = gql`
    mutation insertVehicleLocationOnlyWithOnConflict($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
  insert_vehicle(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      ...VehicleLocationOnly
    }
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type InsertVehicleLocationOnlyWithOnConflictMutationFn = ApolloReactCommon.MutationFunction<InsertVehicleLocationOnlyWithOnConflictMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables>;
export type InsertVehicleLocationOnlyWithOnConflictMutationResult = ApolloReactCommon.MutationResult<InsertVehicleLocationOnlyWithOnConflictMutation>;
export type InsertVehicleLocationOnlyWithOnConflictMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertVehicleLocationOnlyWithOnConflictMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables>;
export const UpdateVehicleLocationOnlyByIdDocument = gql`
    mutation updateVehicleLocationOnlyById($id: String, $set: vehicle_set_input) {
  update_vehicle(_set: $set, where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      ...VehicleLocationOnly
    }
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type UpdateVehicleLocationOnlyByIdMutationFn = ApolloReactCommon.MutationFunction<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>;
export type UpdateVehicleLocationOnlyByIdMutationResult = ApolloReactCommon.MutationResult<UpdateVehicleLocationOnlyByIdMutation>;
export type UpdateVehicleLocationOnlyByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>;
export const UpdateVehicleLocationOnlyDocument = gql`
    mutation updateVehicleLocationOnly($set: vehicle_set_input, $where: vehicle_bool_exp!) {
  update_vehicle(_set: $set, where: $where) {
    affected_rows
    returning {
      ...VehicleLocationOnly
    }
  }
}
    ${VehicleLocationOnlyFragmentDoc}`;
export type UpdateVehicleLocationOnlyMutationFn = ApolloReactCommon.MutationFunction<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>;
export type UpdateVehicleLocationOnlyMutationResult = ApolloReactCommon.MutationResult<UpdateVehicleLocationOnlyMutation>;
export type UpdateVehicleLocationOnlyMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>;