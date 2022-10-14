import { connect } from "mongoose";
import {MONGODB_URI} from './config';

connect(MONGODB_URI);
